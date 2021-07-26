/* eslint-disable import/no-extraneous-dependencies */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCYfY_eYHFhQnsS2ixXJEpGhoIVZpAW8Vg",
  authDomain: "pebl-games.firebaseapp.com",
  projectId: "pebl-games",
  storageBucket: "pebl-games.appspot.com",
  messagingSenderId: "698928293002",
  appId: "1:698928293002:web:0565767f213ab8b5e0f973",
  measurementId: "G-CGR3L091M0",
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
  // measurementId: process.env.REACT_APP_MEASUREMENTID,
};

class Firebase {
  firebase: typeof firebase;

  app: firebase.app.App;

  constructor() {
    const app = firebase.initializeApp(config);
    this.firebase = firebase;
    this.app = app;
  }
}

export default Firebase;
