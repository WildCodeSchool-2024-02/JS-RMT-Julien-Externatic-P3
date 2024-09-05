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
        c.created_at 
      FROM ${this.table} c 
      INNER JOIN profil p ON c.candidate_id = p.user_id 
      WHERE c.offer_id = ? 
      ORDER BY c.created_at
    `;

    const [rows] = await this.database.query(query, [offerId]);

    return rows;
  }

  async readAllByUserId(userId) {
    const query = `
      SELECT 
        o.title,
        s.label AS status,
        DATE(c.created_at) AS created_at,
        c.motivation
      FROM ${this.table} c
      INNER JOIN offer o ON c.offer_id = o.id
      INNER JOIN status s ON c.status_id = s.id
      WHERE c.candidate_id = ?
      ORDER BY c.created_at DESC
    `;
  
    const [rows] = await this.database.query(query, [userId]);
  
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
}
module.exports = CandidacyRepository;
