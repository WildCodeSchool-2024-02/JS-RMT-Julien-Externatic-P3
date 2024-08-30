const AbstractRepository = require("./AbstractRepository");

class WorkFormatRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "work_format" });
  }

  // The Rs of CRUD - Read operations
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select id, format as label from ${this.table}`
    );

    // Return the array of items
    return rows;
  }
}

module.exports = WorkFormatRepository;
