// Import the repository modules responsible for handling data operations on the tables
const ItemRepository = require("./models/ItemRepository");
const ProfilRepository = require("./models/ProfilRepository");
const CompanyRepository = require("./models/CompanyRepository");
const OfferRepository = require("./models/OfferRepository");
const UserRepository = require("./models/UserRepository");
const ContractRepository = require("./models/ContractRepository");
const WorkTimeRepository = require("./models/WorkTimeRepository");
const WorkFormatRepository = require("./models/WorkFormatRepository");
const CategoryRepository = require("./models/CategoryRepository");
const StudyLevelRepository = require("./models/StudyLevelRepository");
const TechnologyRepository = require("./models/TechnologyRepository");
const CandidacyRepository = require("./models/CandidacyRepository");
const FavoriteRepository = require("./models/FavoriteRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.item = new ItemRepository();
tables.profil = new ProfilRepository();
tables.company = new CompanyRepository();
tables.offer = new OfferRepository();
tables.user = new UserRepository();
tables.contract = new ContractRepository();
tables.workTime = new WorkTimeRepository();
tables.workFormat = new WorkFormatRepository();
tables.category = new CategoryRepository();
tables.studyLevel = new StudyLevelRepository();
tables.technology = new TechnologyRepository();
tables.candidacy = new CandidacyRepository();
tables.favorite = new FavoriteRepository();


/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
