const AbstractRepository = require("./AbstractRepository");

class OfferRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "offer" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async readAllConsultantOffer(id) {
    // Execute the SQL SELECT query to retrieve all companys from the "company" table
    const [rows] = await this.database.query(
      `SELECT o.id, o.title, cat.category, comp.name, o.on_updated_at, COUNT(c.candidate_id) AS candidacy_count FROM offer AS o INNER JOIN category AS cat ON cat.id = o.category_id INNER JOIN company AS comp ON comp.id = o.company_id LEFT JOIN candidacy AS c ON o.id = c.offer_id WHERE o.consultant_id = ? GROUP BY o.id, o.title, cat.category, o.start_date, o.on_updated_at`,
      [id]
    );
    // Return the array of companys
    return rows;
  }
}

module.exports = OfferRepository;
