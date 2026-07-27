import { auth } from "../firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// SIGN UP
const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
  signupBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account Created Successfully!");

      window.location.href = "login.html";

    } catch (error) {
      alert(error.message);
    }

  });
}

// LOGIN
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful!");

      window.location.href = "index.html";

    } catch (error) {
      alert(error.message);
    }

  });
} 