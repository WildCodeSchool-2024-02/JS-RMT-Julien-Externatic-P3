const Joi = require("joi");

const offerSchema = Joi.object({
  title: Joi.string().max(255).required(),
  missions: Joi.string().required(),
  profil_desc: Joi.string().required(),
  benefits: Joi.string().required(),
  city: Joi.string().max(255).required(),
  salary: Joi.number(),
  start_date: Joi.string().max(255),
  is_cadre: Joi.boolean(),
  company_id: Joi.number().integer().min(1).required(),
  study_level_id: Joi.number().integer().min(1).required(),
  contract_id: Joi.number().integer().min(1).required(),
  work_time_id: Joi.number().integer().min(1).required(),
  work_format_id: Joi.number().integer().min(1).required(),
  category_id: Joi.number().integer().min(1).required(),
});

const validateOffer = (req, res, next) => {
  const { error } = offerSchema.validate(req.body);

  if (error == null) {
    next();
  } else {
    res.status(500).json({ validationErrors: error.details });
  }
};

module.exports = validateOffer;
