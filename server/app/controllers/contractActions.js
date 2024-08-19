// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const contracts = await tables.contract.readAll();
    res.status(200).json(contracts);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = { browse };
