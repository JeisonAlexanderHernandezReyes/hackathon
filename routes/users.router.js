const express = require('express');
const dotenv = require("dotenv");
const axios = require('axios');
const fs = require('fs');
const UserGeneratePdfService = require('./../services/user.generatepdf.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserGeneratePdfService();

dotenv.config({ path: ".env" });
process.env.URLANI;

/* A post request to the route /:getUserPdf, it is using the validatorHandler middleware to validate
the params, and it is using the async function to get the documentNumber from the params, and then
it is using the service to find the user with the idUsuario, and then it is returning the dataCompletePerson. */
router.post('/:getUserPdf',
  validatorHandler(getUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body.nuip;
      const urlANI = process.env.URLANI;

      //CONSTRUCCIÓN DE LA PETICIÓN A END POINT DE ANI
      const res = await axios.get(urlANI + body, { headers: { Authorization: process.env.TOKEN } });
      console.log("res",res.data);
      const dataCompletePerson = await service.generatePDF(res.data);
      //res.data.statusCode(200).json(res);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;