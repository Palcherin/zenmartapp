// import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtQQ8_5MSxNNKDXW2AIL9BPHmH8X8niMg",
  authDomain: "zenmart-e-commerse.firebaseapp.com",
  projectId: "zenmart-e-commerse",
  storageBucket: "zenmart-e-commerse.appspot.com",
  messagingSenderId: "566526380413",
  appId: "1:566526380413:web:00d2ecb93c33320b0c6414",
  measurementId: "G-H3ZQPSS4MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db=getFirestore(app)







