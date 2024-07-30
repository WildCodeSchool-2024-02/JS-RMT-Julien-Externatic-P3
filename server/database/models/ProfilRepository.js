const AbstractRepository = require("./AbstractRepository");

class ProfilRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "profil" as configuration
    super({ table: "profil" });
  }

  // The C of CRUD - Create operation

  // async create(profil) {
  //   // Execute the SQL INSERT query to add a new profil to the "profil" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (title, user_id) values (?, ?)`,
  //     [profil.title, profil.user_id]
  //   );

  //   // Return the ID of the newly inserted profil
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific profil by its ID
    const [rows] = await this.database.query(
      `select ${this.table}.*, u.mail from ${this.table} INNER JOIN user AS u ON ${this.table}.user_id = u.id INNER JOIN role AS r ON u.role_id = r.id where user_id = ? AND r.role ='Candidat'`,
      [id]
    );
    return rows[0];
    //   // Return the first row of the result, which represents the profil
    // }

    // async readAll() {
    //   // Execute the SQL SELECT query to retrieve all profils from the "profil" table
    //   const [rows] = await this.database.query(`select * from ${this.table}`);

    //   // Return the array of profils
    //   return rows;
    // }

    // The U of CRUD - Update operation
    // TODO: Implement the update operation to modify an existing profil

    // async update(profil) {
    //   ...
    // }

    // The D of CRUD - Delete operation
    // TODO: Implement the delete operation to remove an profil by its ID

    // async delete(id) {
    //   ...
    // }
  }
}

module.exports = ProfilRepository;
