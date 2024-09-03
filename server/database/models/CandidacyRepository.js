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
}

module.exports = CandidacyRepository;