import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTlsWgX2ud4bwpAIgtqwTsM510Akp0DQQ",
  authDomain: "motoalgarrobo.firebaseapp.com",
  projectId: "motoalgarrobo",
  storageBucket: "motoalgarrobo.firebasestorage.app",
  messagingSenderId: "860533985836",
  appId: "1:860533985836:web:479445d385d5333b837789"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
