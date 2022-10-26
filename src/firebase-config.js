import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmtn0NEAZ5Mg-iQfl1K9BIdR4Dyq39OMk",
  authDomain: "is216-363607.firebaseapp.com",
  databaseURL: "https://is216-363607-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "is216-363607",
  storageBucket: "is216-363607.appspot.com",
  messagingSenderId: "118258470536",
  appId: "1:118258470536:web:fce752bcd432137fda993d",
  measurementId: "G-W9LLNQFYWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);