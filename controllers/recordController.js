const Record = require("../models/FinancialRecord");

exports.createRecord = async (req,res)=>{
  const record = await Record.create({...req.body,user:req.user.id});
  res.json(record);
};

exports.getRecords = async (req,res)=>{
  const { type, category, startDate, endDate } = req.query;

  let filter = { user: req.user.id };

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate)
    };
  }

  const records = await Record.find(filter);
  res.json(records);
};

exports.deleteRecord = async (req,res)=>{
  await Record.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
};
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findById(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    const updatedRecord = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedRecord);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};