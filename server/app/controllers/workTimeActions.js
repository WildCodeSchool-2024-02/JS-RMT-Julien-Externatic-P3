// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const workTimes = await tables.workTime.readAll();
    res.status(200).json(workTimes);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = { browse };
