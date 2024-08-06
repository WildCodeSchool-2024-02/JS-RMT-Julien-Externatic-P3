const AbstractRepository = require("./AbstractRepository");

class OfferRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "offer" });
  }

  async create(offer) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, missions, profil_desc, benefits, city, salary, start_date, is_cadre, consultant_id, company_id, study_level_id, contract_id, work_time_id, work_format_id, category_id) 
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        offer.title,
        offer.missions,
        offer.profil_desc,
        offer.benefits,
        offer.city,
        offer.salary,
        offer.start_date,
        offer.is_cadre,
        offer.consultant_id,
        offer.company_id,
        offer.study_level_id,
        offer.contract_id,
        offer.work_time_id,
        offer.work_format_id,
        offer.category_id,
      ]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT o.*, c.description, co.name AS contractName, wf.format, aa.name AS activityAreaName, sl.level, GROUP_CONCAT (tec.tech SEPARATOR ', ') AS technology FROM ${this.table} AS o INNER JOIN company AS c ON c.id = o.company_id INNER JOIN contract AS co ON co.id = o.contract_id INNER JOIN work_format AS wf ON wf.id = o.work_format_id INNER JOIN activity_area AS aa ON aa.id = c.activity_area_id INNER JOIN study_level AS sl ON sl.id = o.study_level_id INNER JOIN technology_offer AS teco ON technology_id = offer_id INNER JOIN technology AS tec ON teco.technology_id = tec.id where o.id = ?`,
      [id]
    );
    return rows;
  }
}

module.exports = OfferRepository;
