  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, 
  GoogleAuthProvider, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBj4PA_YqCNRfuKBBswry3Jd6l5ZvoDvY4",
    authDomain: "sign-up-login-form-6d6ef.firebaseapp.com",
    projectId: "sign-up-login-form-6d6ef",
    storageBucket: "sign-up-login-form-6d6ef.firebasestorage.app",
    messagingSenderId: "900601216169",
    appId: "1:900601216169:web:199c04d2584849a99d3db8",
    measurementId: "G-NLJ0P7XH1M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(); 

  // SignUp Code
  document.getElementById("signup-btn")?.addEventListener("click" , (e) => {
    e.preventDefault();

    let email = document.getElementById("signup-email").value; 
    let password = document.getElementById("signup-password").value; 

    createUserWithEmailAndPassword(auth, email, password)     
    .then(() => {       
        alert("SignUp SuccessFully!!");       
        window.location.href = "welcome.html";     
    })     
    .catch((error) => {       
        alert(error.message);     
    }); 
 });
 
  //LogIn Code 
  document.getElementById("login-btn")?.addEventListener("click" , () => {
    
    let email = document.getElementById("login-email").value; 
    let password = document.getElementById("login-password").value;
    
    signInWithEmailAndPassword(auth , email , password)
    .then(() => {
        alert("Login SuccessFully!!");
        window.location.href = "welcome.html";
    })
    .catch((error) => {       
        alert(error.message);     
    }); 
 })

  //Continue With Google
  document.getElementById("google-btn")?.addEventListener("click" , () => {
    signInWithPopup(auth, provider)
    .then(() => {       
        alert("Login SuccessFully!!");       
        window.location.href = "welcome.html";     
    })     
    .catch((error) => {       
        alert(error.message);     
    }); 
  }) 

  //LogOut Code
  document.getElementById("logout-btn")?.addEventListener("click" , () => {
    signOut(auth)
    .then(() => {
        alert("LogOut SuccessFully!!");
        window.location.href = "index.html";
    })
    .catch((error) => {       
        alert(error.message);     
    }); 
  }) 

  //Welcome Page 
  onAuthStateChanged(auth, (user) => {   
    if (user && window.location.pathname.includes("welcome.html")) {     
        document.getElementById("user-email").textContent = user.email;  
    } 
    else if (!user && window.location.pathname.includes("welcome.html")) {     
        window.location.href = "index.html";         
    } 
  });
