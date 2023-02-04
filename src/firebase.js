// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh-kU7HDxUL_2-Jk5vWBGMgih-O44r2wM",
  authDomain: "react-chat-307b0.firebaseapp.com",
  projectId: "react-chat-307b0",
  storageBucket: "react-chat-307b0.appspot.com",
  messagingSenderId: "384692337823",
  appId: "1:384692337823:web:f8624910017a723f7a76aa",
  measurementId: "G-22MXJS894V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);