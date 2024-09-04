const AbstractRepository = require("./AbstractRepository");

class ProfilRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "profil" as configuration
    super({ table: "profil" });
  }

  // The C of CRUD - Create operation

  async create(profil) {
    // Execute the SQL INSERT query to add a new profil to the "profil" table
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, firstname, lastname) values (? ,? ,?)`,
      [profil.user_id, profil.firstname, profil.lastname]
    );

    // Return the ID of the newly inserted profil
    return result.insertId;
  }

  async createConsultant(profil) {
    // Execute the SQL INSERT query to add a new profil to the "profil" table
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, firstname, lastname, description) values (? ,? ,?, ?)`,
      [profil.user_id, profil.firstname, profil.lastname, profil.description]
    );

    // Return the ID of the newly inserted profil
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific profil by its ID
    const [rows] = await this.database.query(
      `select ${this.table}.*, u.mail from ${this.table} INNER JOIN user AS u ON ${this.table}.user_id = u.id INNER JOIN role AS r ON u.role_id = r.id where user_id = ? AND r.role ='Candidat'`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select * from ${this.table} limit 25`
    );
    return rows;
  }

  async readAllBy(id, filter) {
    let query = `SELECT 
              p.user_id AS id,
              CONCAT(p.firstname, ' ', p.lastname) AS fullname, 
              p.phone, 
              p.city, 
              COUNT(*) AS candidacy_count 
            FROM ${this.table} AS p 
            JOIN candidacy AS c ON p.user_id = c.candidate_id 
            JOIN offer AS o ON c.offer_id = o.id 
            WHERE o.consultant_id = ? 
           `;
    const value = [id];

    if (filter) {
      query +=
        "AND (CONCAT(p.firstname, ' ', p.lastname) LIKE ? OR p.city LIKE ?) ";
      value.push(`%${filter}%`, `%${filter}%`);
    }

    query += `GROUP BY p.user_id, p.firstname, p.lastname, p.phone, p.city`;

    const [rows] = await this.database.query(query, value);
    return rows;
  }

  async isProfileComplete(userId) {
    const query = `
      SELECT 
          p.description IS NOT NULL AND p.description <> '' AS has_description, 
          p.phone IS NOT NULL AND p.phone <> '' AS has_phone, 
          p.city IS NOT NULL AND p.city <> '' AS has_city, 
          p.cv IS NOT NULL AND p.cv <> '' AS has_cv, 
          p.github IS NOT NULL AND p.github <> '' AS has_github, 
          p.linkedin IS NOT NULL AND p.linkedin <> '' AS has_linkedin, 
          (SELECT COUNT(tc.technology_id) FROM technology_candidate AS tc WHERE tc.candidate_id = p.user_id) > 0 AS has_technologies
      FROM 
          ${this.table} AS p 
      WHERE 
          p.user_id = ?;
    `;
  
    const [rows] = await this.database.query(query, [userId]);
    return rows[0];
  }

  // The U of CRUD - Update operation
  async update(profil) {
    // Execute the SQL INSERT query to add a new profil to the "profil" table
    const [result] = await this.database.query(
      "UPDATE profil INNER JOIN user ON profil.user_id = user.id SET firstname = ?, lastname = ?, description = ?, phone = ?, city = ?, github = ?, linkedin = ?, is_active = ?, mail = ?  WHERE user_id = ?",
      [
        profil.firstname,
        profil.lastname,
        profil.description,
        profil.phone,
        profil.city,
        profil.github,
        profil.linkedin,
        profil.is_active,
        profil.mail,
        profil.id,
      ]
    );
    return result;
  }

  async updateCV(profil, id) {
    // Execute the SQL INSERT query to add a new profil to the "profil" table
    const [result] = await this.database.query(
      "UPDATE profil SET cv = ?  WHERE user_id = ?",
      [profil.cv, id]
    );
    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an profil by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ProfilRepository;
