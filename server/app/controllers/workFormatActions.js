// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const workFormats = await tables.workFormat.readAll();
    res.status(200).json(workFormats);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = { browse };
