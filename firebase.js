// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9YzcetJ-B7cmJerqsRSrTX7w1P8g8dNs",
  authDomain: "arka-nest-designs.firebaseapp.com",
  projectId: "arka-nest-designs",
  storageBucket: "arka-nest-designs.firebasestorage.app",
  messagingSenderId: "555145120694",
  appId: "1:555145120694:web:6e535ce7d6a67f3e950f17",
  measurementId: "G-8LNRDN9YDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);