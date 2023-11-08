import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';





// const cors = require("cors")({ origin: true });
// const functions = require("firebase-functions");


// module.exports = functions.https.onRequest(async (req, res) => {
//   cors(req, res, () => {
//     const responseData = { message: "Hello from your Cloud Function!" };
//     res.status(200).json(responseData);
//   });
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
