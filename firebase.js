// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAWrjrRTNJKkHMKav7Jk-WrZ1c0h1OqeOE",
  authDomain: "fir-auth-7fc4e.firebaseapp.com",
  projectId: "fir-auth-7fc4e",
  storageBucket: "fir-auth-7fc4e.appspot.com",
  messagingSenderId: "235442735340",
  appId: "1:235442735340:web:a3c55b1cb30660db3f3dc9",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
