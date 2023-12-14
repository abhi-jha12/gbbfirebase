import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
