const Record = require("../models/FinancialRecord");
const mongoose = require("mongoose");

exports.getDashboard = async (req,res)=>{
  const userId = new mongoose.Types.ObjectId(req.user.id);

  const data = await Record.aggregate([
    { $match: { user: userId } },
    {
      $facet: {
        totals: [
          { $group: { _id: "$type", total: { $sum: "$amount" } } }
        ],
        category: [
          { $group: { _id: "$category", total: { $sum: "$amount" } } }
        ],
        monthly: [
          { $group: { _id: { $month: "$date" }, total: { $sum: "$amount" } } }
        ],
        recent: [
          { $sort: { date: -1 } },
          { $limit: 5 }
        ]
      }
    }
  ]);

  let income = 0, expense = 0;

  data[0].totals.forEach(t=>{
    if(t._id==="income") income = t.total;
    else expense = t.total;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
    categoryBreakdown: data[0].category,
    monthlyTrends: data[0].monthly,
    recentTransactions: data[0].recent
  });
};
