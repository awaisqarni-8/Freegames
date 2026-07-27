import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTmWRTgOBUhCmrWzyMz1Kfl9OVx54POEI",
  authDomain: "freegames-1bda5.firebaseapp.com",
  projectId: "freegames-1bda5",
  storageBucket: "freegames-1bda5.firebasestorage.app",
  messagingSenderId: "630809648682",
  appId: "1:630809648682:web:805573939cd21ea827ad53",
  measurementId: "G-RH7LK6VVZ3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);