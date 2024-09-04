const AbstractRepository = require("./AbstractRepository");

class CandidacyRepository extends AbstractRepository {
  constructor() {
    super({ table: "candidacy" });
  }

  async readAllByOfferId(offerId) {
    const query = `
      SELECT 
        c.candidate_id as id,
        p.firstname,
        p.lastname,
        p.phone,
        p.city AS candidate_city,
        c.created_at, 
        s.label
      FROM ${this.table} as c 
      INNER JOIN profil p ON c.candidate_id = p.user_id 
      INNER JOIN status s ON c.status_id = s.id
      WHERE c.offer_id = 1
      ORDER BY c.created_at LIMIT 100
    `;

    const [rows] = await this.database.query(query, [offerId]);

    return rows;
  }

  async create(candidacy) {
    // Execute the SQL INSERT query to add a new candidacy to the "candidacy" table
    const [result] = await this.database.query(
      `insert into ${this.table} (candidate_id, offer_id, motivation) values (?, ?, ?)`,
      [candidacy.candidate_id, candidacy.offer_id, candidacy.motivation]
    );
    return result;
  }

  async update(candidacy) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET status_id = ? WHERE candidate_id = ? AND offer_id = ?`,
      [candidacy.status_id, candidacy.candidate_id, candidacy.offer_id]
    );
    return result.affectedRows;
  }
}
module.exports = CandidacyRepository;
