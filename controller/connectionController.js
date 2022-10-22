const axios = require('axios');
const dotenv = require("dotenv");

/**
 * It takes a string as an argument, and returns a promise that resolves to the response data from an
 * API call.
 * @param body - "string" - The body is a document number of person by realice the request to API .
 */
async function doGetRequest(body) {
    dotenv.config({ path: "./../.env" });
    const bodyInformation = body;

    const url = process.env.URLANI + bodyInformation;

    await axios.get(url, {
        headers: {
            Authorization: process.env.AUTH_TOKEN
        }
    }).then((response) => {
        console.log(response.data);
        return response.data;
    }).catch((error) => {
        console.log(error);
        return error;
    });
}

//doGetRequest("1049658998");
doGetRequest(body);