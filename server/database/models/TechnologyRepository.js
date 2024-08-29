const AbstractRepository = require("./AbstractRepository");

class TechnologyRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "technology" as configuration
    super({ table: "technology" });
  }

  // The C of CRUD - Create operation

  async create(technology) {
    // Execute the SQL INSERT query to add a new technology to the "technology" table
    const [result] = await this.database.query(
      `insert into ${this.table} (tech) values (?)`,
      [technology.tech]
    );

    // Return the ID of the newly inserted technology
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific technology by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the technology
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all technologies from the "technology" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of technologies
    return rows;
  }

  async readAllByCandidat(id) {
    // Execute the SQL SELECT query to retrieve all technologies from the "technology" table
    const [rows] = await this.database.query(
      `SELECT t.id, t.tech FROM technology_candidate tc JOIN ${this.table} AS t ON tc.technology_id = t.id JOIN  profil p ON tc.candidate_id = p.user_id WHERE p.user_id = ?`,
      [id]
    );

    // Return the array of technologies
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing technology

  // async update(technology) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an technology by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = TechnologyRepository;
