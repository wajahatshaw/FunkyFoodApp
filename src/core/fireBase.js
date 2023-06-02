
//fireBase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv3csCBIrW3jxcuTVNMA9Nn7bTlvGzXCA",
  authDomain: "test-funky-food.firebaseapp.com",
  projectId: "test-funky-food",
  storageBucket: "test-funky-food.appspot.com",
  messagingSenderId: "942436595369",
  appId: "1:942436595369:web:3d8dabdf55f4c454b05bb8",
  measurementId: "G-Z65SLBENGJ"
};

// Initialize Firebase
export default app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const Auth = getAuth(app);



