import { auth } from "../firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// Check Login
onAuthStateChanged(auth, (user) => {

  if (user) {

    userEmail.textContent = user.email;

  } else {

    window.location.href = "login.html";

  }

});

// Logout
logoutBtn.addEventListener("click", async () => {

  try {

    await signOut(auth);

    alert("Logged Out Successfully");

    window.location.href = "login.html";

  } catch (error) {

    alert(error.message);

  }

});