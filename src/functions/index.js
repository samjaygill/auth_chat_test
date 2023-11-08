// const cors = require("cors")({ origin: true });
// const functions = require("firebase-functions");

// module.exports = functions.https.onRequest(async (req, res) => {
//   cors(req, res, () => {
//     const responseData = { message: "Hello from your Cloud Function!" };
//     res.status(200).json(responseData);
//   });
// });


const { onRequest } = require('firebase-functions/v2/https');

const express = require('express');
const app = express();

app.use(myMiddleware);