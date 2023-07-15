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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        alert("Error!");
    })
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        alert("Error!");
    });
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        alert("Error!");
    });
}
