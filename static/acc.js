firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("register")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}
