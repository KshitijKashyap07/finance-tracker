const User = require("../models/User");
const generateToken = require("../utils/generateToken");

exports.register = async (req,res)=>{
  try{
    const user = await User.create(req.body);
    res.json(user);
  }catch(err){
    res.status(400).json({message:err.message});
  }
};

exports.login = async (req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});
  if(!user) return res.status(404).json({message:"User not found"});

  const isMatch = await user.comparePassword(password);
  if(!isMatch) return res.status(400).json({message:"Wrong password"});

  const token = generateToken(user);
  res.json({token});
};
