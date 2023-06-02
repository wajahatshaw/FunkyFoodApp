importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-compat.js');
import firebase from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyCv3csCBIrW3jxcuTVNMA9Nn7bTlvGzXCA",
    authDomain: "test-funky-food.firebaseapp.com",
    projectId: "test-funky-food",
    storageBucket: "test-funky-food.appspot.com",
    messagingSenderId: "942436595369",
    appId: "1:942436595369:web:3d8dabdf55f4c454b05bb8",
    measurementId: "G-Z65SLBENGJ"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
