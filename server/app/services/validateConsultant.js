const Joi = require("joi");

const consultantSchema = Joi.object({
  mail: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  firstname: Joi.string().max(255).required(),
  lastname: Joi.string().max(255).required(),
  description: Joi.string().allow("").required(),
});

const validateConsultant = (req, res, next) => {
  const { error } = consultantSchema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(422).json({ validationErrors: error.details });
  }
};

module.exports = validateConsultant;
