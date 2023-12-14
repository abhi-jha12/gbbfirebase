// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrsBNdQ1OlaMddyvclLBZJl4uCLRK-zzM",
  authDomain: "gbbapp-f61dc.firebaseapp.com",
  databaseURL: "https://gbbapp-f61dc-default-rtdb.firebaseio.com",
  projectId: "gbbapp-f61dc",
  storageBucket: "gbbapp-f61dc.appspot.com",
  messagingSenderId: "196318942043",
  appId: "1:196318942043:web:ad0e08a6b2d282bb47807e",
  measurementId: "G-M8S0BLHV50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);