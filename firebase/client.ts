// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOdsSATp1MMLfEkP9zYz9rmluBhkmWeH8",
  authDomain: "mockhire-b868c.firebaseapp.com",
  projectId: "mockhire-b868c",
  storageBucket: "mockhire-b868c.firebasestorage.app",
  messagingSenderId: "152802976370",
  appId: "1:152802976370:web:225431f65d7350620a18eb",
  measurementId: "G-180DPLJRFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);