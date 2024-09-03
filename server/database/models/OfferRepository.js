const AbstractRepository = require("./AbstractRepository");

class OfferRepository extends AbstractRepository {
  constructor() {
    super({ table: "offer" });
  }

  async readAll(userId) {
    let url = `select * from ${this.table} as o`;
    const value = [];

    if (userId) {
      url +=
        " left join favorite as f on o.id = f.offer_id and f.candidate_id = ?";
      value.push(userId);
    }

    url += ` limit 50`;
    const [rows] = await this.database.query(url, value);
    return rows;
  }

  async readAllCategory(categoryId) {
    const [rows] = await this.database.query(
      `select * from ${this.table} WHERE category_id = ? limit 25`,
      [categoryId]
    );
    return rows;
  }

  async readAllByConsultant(id, filter) {
    let query = `SELECT o.id, o.title, cat.category, comp.name, DATE_FORMAT(o.on_updated_at, '%Y-%m-%d') AS onUpdatedAt, COUNT(c.candidate_id) AS candidacy_count 
       FROM offer AS o 
       INNER JOIN category AS cat ON cat.id = o.category_id 
       INNER JOIN company AS comp ON comp.id = o.company_id 
       LEFT JOIN candidacy AS c ON o.id = c.offer_id 
       WHERE o.consultant_id = ? 
       `;
    const value = [id];

    if (filter) {
      query +=
        "AND ( o.title LIKE ? OR cat.category LIKE ? OR comp.name LIKE ? ) ";
      value.push(`%${filter}%`, `%${filter}%`, `%${filter}%`);
    }

    query +=
      "GROUP BY o.id, o.title, cat.category, o.start_date, o.on_updated_at";

    const [rows] = await this.database.query(query, value);
    return rows;
  }

  async readLasts() {
    const [rows] = await this.database.query(
      `SELECT title, salary, city, id 
       FROM ${this.table} 
       ORDER BY created_at DESC 
       LIMIT 5`
    );
    return rows;
  }

  async read(id, userId) {
    let url = `
      SELECT 
        o.*, 
        c.description, 
        co.name AS contractName, 
        wf.format, 
        aa.name AS activityAreaName, 
        sl.level, 
        GROUP_CONCAT(tec.tech SEPARATOR ', ') AS technology
    `;
    if (userId) {
      url += `,
        f.candidate_id, 
        f.offer_id
      `;
    }
    url += `
    FROM ${this.table} AS o
    INNER JOIN company AS c ON c.id = o.company_id
    INNER JOIN contract AS co ON co.id = o.contract_id
    INNER JOIN work_format AS wf ON wf.id = o.work_format_id
    INNER JOIN activity_area AS aa ON aa.id = c.activity_area_id
    INNER JOIN study_level AS sl ON sl.id = o.study_level_id
    INNER JOIN technology_offer AS teco ON teco.offer_id = o.id
    INNER JOIN technology AS tec ON teco.technology_id = tec.id
    `;
    const value = [];
    if (userId) {
      url += `
      LEFT JOIN favorite AS f ON o.id = f.offer_id AND f.candidate_id = ?
    `;
      value.push(userId);
    }
    url += ` WHERE o.id = ?`;
    value.push(id);
    const [rows] = await this.database.query(url, value);
    return rows;
  }

  async create(offer) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} 
       (title, missions, profil_desc, benefits, city, salary, start_date, is_cadre, consultant_id, company_id, study_level_id, contract_id, work_time_id, work_format_id, category_id) 
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

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = OfferRepository;
