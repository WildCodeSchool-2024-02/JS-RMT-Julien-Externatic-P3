const AbstractRepository = require("./AbstractRepository");

class CandidacyRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "candidacy" });
  }

  async addCandidacy(candidateId, offerId) {
    const [rows] = await this.database.query(
      `
      INSERT INTO ${this.table} (candidate_id, offer_id, created_at, status_id)
      VALUES (?, ?, NOW(), ?)
    `,
      [candidateId, offerId, 1]
    );
    return rows;
  }
}

module.exports = CandidacyRepository;