// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZ6tOf3soQeb0FbtAXfyoiANFXOY5HkmU",
    authDomain: "apirestdb07.firebaseapp.com",
    projectId: "apirestdb07",
    storageBucket: "apirestdb07.firebasestorage.app",
    messagingSenderId: "232166344488",
    appId: "1:232166344488:web:7337f277b22aa1a1a0f21d",
    measurementId: "G-T8EE0BF8KC"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

export { db };