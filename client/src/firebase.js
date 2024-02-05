// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "learning-auth-4848b.firebaseapp.com",
  projectId: "learning-auth-4848b",
  storageBucket: "learning-auth-4848b.appspot.com",
  messagingSenderId: "127616482470",
  appId: "1:127616482470:web:5328f661b0f055160e4867",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
