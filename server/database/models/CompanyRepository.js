const AbstractRepository = require("./AbstractRepository");

class CompanyRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "company" as configuration
    super({ table: "company" });
  }

  // The C of CRUD - Create operation

  async create(company) {
    // Execute the SQL INSERT query to add a new company to the "company" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [company.title, company.user_id]
    );

    // Return the ID of the newly inserted company
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific company by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the company
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all companys from the "company" table
    const [rows] = await this.database.query(
      `SELECT c.id, c.name, c.head_office, a_a.name AS activity_area_name, COUNT(o.id) AS offer_count FROM ${this.table} AS c INNER JOIN activity_area AS a_a ON a_a.id = c.activity_area_id INNER JOIN offer AS o ON o.company_id = c.id GROUP BY c.id, a_a.name `
    );

    // Return the array of companys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing company

  // async update(company) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an company by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CompanyRepository;