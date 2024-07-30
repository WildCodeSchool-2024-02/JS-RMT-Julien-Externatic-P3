const Joi = require("joi");

const profilSchema = Joi.object({
  firstname: Joi.string().max(255).required(),
  lastname: Joi.string().max(255).required(),
  description: Joi.string().required(),
  phone: Joi.number().integer.required(),
  city: Joi.string().max(255).required(),
  github: Joi.string().max(255).required(),
  linkedin: Joi.string().max(255).required(),
});

const validateProfil = (req, res, next) => {
  const { error } = profilSchema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

module.exports = validateProfil;
