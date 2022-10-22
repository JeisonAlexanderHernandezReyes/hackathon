const Joi = require('joi').extend(require('@joi/date'));

const documentNumber = Joi.string().min(1).max(25).required();

/* A schema for the getUser endpoint. */
const getUserSchema = Joi.object({
  nuip: documentNumber.required(),
});

module.exports = { getUserSchema }/* A post request that is being sent to the server. */
