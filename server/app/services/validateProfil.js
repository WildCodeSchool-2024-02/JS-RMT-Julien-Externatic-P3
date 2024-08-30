const Joi = require("joi");

const profilSchema = Joi.object({
  firstname: Joi.string().max(255).required(),
  lastname: Joi.string().max(255).required(),
  description: Joi.string().allow("").required(),
  phone: Joi.string().allow("").required(),
  city: Joi.string().max(255).allow("").required(),
  mail: Joi.string().allow("").required(),
});

const validateProfil = (req, res, next) => {
  const { error } = profilSchema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(422).json({ validationErrors: error.details });
  }
};

module.exports = validateProfil;
