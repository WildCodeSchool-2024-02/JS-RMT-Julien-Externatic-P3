const AbstractRepository = require("./AbstractRepository");

class CandidacyRepository extends AbstractRepository {
  constructor() {
    super({ table: "candidacy" });
  }

  // Method to get all candidacies for a specific offer by offer ID
  async readAllByOfferId(offerId) {
    const query = `
      SELECT 
        c.offer_id,
        c.candidate_id,
        p.firstname,
        p.lastname,
        p.description,
        p.phone,
        p.city AS candidate_city,
        p.cv,
        o.title,
        o.missions,
        o.city AS offer_city,
        o.study_level_id,
        c.created_at
      FROM ${this.table} c
      INNER JOIN profil p ON c.candidate_id = p.user_id 
      INNER JOIN offer o ON c.offer_id = o.id 
      WHERE c.offer_id = ? 
      ORDER BY c.created_at
    `;

    // Execute the query to fetch candidacies by offer ID
    const [rows] = await this.database.query(query, [offerId]);

    // Return the resulting array of candidacies
    return rows;
  }
}

module.exports = CandidacyRepository;
