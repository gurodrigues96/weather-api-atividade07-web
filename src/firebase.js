// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ6tOf3soQeb0FbtAXfyoiANFXOY5HkmU",
  authDomain: "apirestdb07.firebaseapp.com",
  projectId: "apirestdb07",
  storageBucket: "apirestdb07.firebasestorage.app",
  messagingSenderId: "232166344488",
  appId: "1:232166344488:web:7337f277b22aa1a1a0f21d",
  measurementId: "G-T8EE0BF8KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);