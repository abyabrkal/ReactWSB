import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjsJ_EWdDJ_nYLSrKCV-XnCzUJ7E4EfVM",
    authDomain: "catch-of-the-day-akal.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-akal.firebaseio.com",
  });

const base = Rebase.createClass(firebaseApp.database());

//this is named export
export { firebaseApp };

// this is default export
export default base;