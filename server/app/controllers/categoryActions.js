// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const categories = await tables.category.readAll();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = { browse };
