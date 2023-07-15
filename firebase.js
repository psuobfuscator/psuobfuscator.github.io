// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmUgjuSEe1jDv9zSbmcnr_B6JnN60IOZU",
  authDomain: "ltps-c077b.firebaseapp.com",
  projectId: "ltps-c077b",
  storageBucket: "ltps-c077b.appspot.com",
  messagingSenderId: "412384820475",
  appId: "1:412384820475:web:659697a500fc2bb23dc45e",
  measurementId: "G-YY8JH0WCQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
