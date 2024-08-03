const AbstractRepository = require("./AbstractRepository");

class OfferRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "offer" });
  }

  async create(offer) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, missions, profil_desc, benefits, city, salary, start_date, consultant_id, company_id, study_level_id, contract_id, work_time_id, work_format_id, category_id) 
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        offer.title,
        offer.missions,
        offer.profil_desc,
        offer.benefits,
        offer.city,
        offer.salary,
        offer.start_date,
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
}

module.exports = OfferRepository;
