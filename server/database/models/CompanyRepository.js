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
      `SELECT c.*, aA.name AS activityAreaName, GROUP_CONCAT(CONCAT(p.firstname, " ", p.lastname) SEPARATOR ", ") AS consultantName FROM company AS c INNER JOIN activity_area as aA on aA.id = c.activity_area_id INNER JOIN consultant_company on consultant_company.company_id = c.id INNER JOIN user as us ON us.id = consultant_company.consultant_id INNER JOIN profil AS p on p.user_id = us.id WHERE c.id = ? GROUP BY c.id, aA.name`,
      [id]
    );

    // Return the first row of the result, which represents the company
    return rows[0];
  }

  async readAll(filter) {
    // Construire la requête SQL de base
    let query = `
      SELECT 
        c.id, 
        c.name, 
        c.head_office, 
        a_a.name AS activityAreaName, 
        COUNT(o.id) AS offer_count 
      FROM ${this.table} AS c 
      INNER JOIN activity_area AS a_a ON a_a.id = c.activity_area_id 
      INNER JOIN offer AS o ON o.company_id = c.id 
    `;

    // Tableau pour les valeurs de la requête
    const values = [];

    // Ajouter une clause WHERE si un filtre est fourni
    if (filter) {
      query += `
        WHERE c.name LIKE ? OR c.head_office LIKE ? OR a_a.name LIKE ?
      `;
      values.push(`%${filter}%`, `%${filter}%`, `%${filter}%`);
    }

    // Ajouter la clause GROUP BY
    query += `
      GROUP BY c.id, c.name, c.head_office, a_a.name
    `;

    // Exécuter la requête SQL avec les valeurs associées
    const [rows] = await this.database.query(query, values);

    // Retourner les résultats
    return rows;
  }

  async readAllByConsultant(consultantId, filter) {
    let query = `
      SELECT 
        c.id, 
        c.name, 
        c.head_office, 
        a_a.name AS activityAreaName, 
        COUNT(o.id) AS offer_count 
      FROM ${this.table} AS c 
      INNER JOIN activity_area AS a_a ON a_a.id = c.activity_area_id 
      INNER JOIN offer AS o ON o.company_id = c.id 
      LEFT JOIN consultant_company AS cc ON c.id = cc.company_id 
      WHERE cc.consultant_id = ? 
    `;

    const value = [consultantId];

    // Ajouter une clause WHERE si un filtre est fourni
    if (filter) {
      query += `
        AND (c.name LIKE ? OR c.head_office LIKE ? OR a_a.name LIKE ?)
      `;
      value.push(`%${filter}%`, `%${filter}%`, `%${filter}%`);
    }

    // Ajouter la clause GROUP BY après le filtrage
    query += `
      GROUP BY c.id, c.name, c.head_office, a_a.name
    `;

    // Exécuter la requête SQL avec les valeurs associées
    const [rows] = await this.database.query(query, value);

    // Retourner les résultats
    return rows;
  }

  async listAll(consultant) {
    if (Number.isNaN(+consultant) || consultant <= 0) {
      const [rows] = await this.database.query(
        `SELECT id, name AS label FROM ${this.table}`
      );
      return rows;
    }
    const [rows] = await this.database.query(
      `SELECT c.id, c.name AS label FROM ${this.table} AS c JOIN consultant_company AS cc ON c.id = cc.company_id  WHERE cc.consultant_id = ?`,
      [consultant]
    );
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
