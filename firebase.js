import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
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
    appId: "1:412384820475:web:7596681cd9d4865b3dc45e",
    measurementId: "G-SWM29DZ8YZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
