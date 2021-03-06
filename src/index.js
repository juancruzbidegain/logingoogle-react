import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

// import { FirebaseAppProvider } from "reactfire"
// import firebaseConfig from "../firebase-config.js"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


