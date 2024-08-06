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

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT o.*, c.description, co.name AS contractName, wf.format, aa.name AS activityAreaName, sl.level, GROUP_CONCAT (tec.tech SEPARATOR ', ') AS technology FROM ${this.table} AS o INNER JOIN company AS c ON c.id = o.company_id INNER JOIN contract AS co ON co.id = o.contract_id INNER JOIN work_format AS wf ON wf.id = o.work_format_id INNER JOIN activity_area AS aa ON aa.id = c.activity_area_id INNER JOIN study_level AS sl ON sl.id = o.study_level_id INNER JOIN technology_offer AS teco ON technology_id = offer_id INNER JOIN technology AS tec ON teco.technology_id = tec.id where o.id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = OfferRepository;
