const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  // async create(user) {
  //   // Execute the SQL INSERT query to add a new user to the "user" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (title, user_id) values (?, ?)`,
  //     [user.title, user.user_id]
  //   );

  //   // Return the ID of the newly inserted user
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  // async read(id) {
  //   // Execute the SQL SELECT query to retrieve a specific user by its ID
  //   const [rows] = await this.database.query(
  //     `select * from ${this.table} where id = ?`,
  //     [id]
  //   );

  //   // Return the first row of the result, which represents the user
  //   return rows[0];
  // }

  async readAllConsultant() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database
      .query(`SELECT u.id, CONCAT(p.lastname, " ", p.firstname) AS fullname, u.mail, COUNT(DISTINCT o.title) AS nb_offer, COUNT(DISTINCT comp.id) AS nb_company  FROM ${this.table} AS u INNER JOIN profil AS p ON p.user_id = u.id INNER JOIN offer AS o ON o.consultant_id = u.id
INNER JOIN consultant_company AS cc ON cc.consultant_id = u.id INNER JOIN company AS comp ON cc.company_id = comp.id WHERE u.role_id = 2 GROUP BY u.id, p.firstname, p.lastname `);

    // Return the array of users
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  // async update(user) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an user by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserRepository;