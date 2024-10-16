// firebase.js
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from 'firebase/analytics'; // Remove this line if not used

const firebaseConfig = {
  apiKey: "AIzaSyCCFG82eDCwOitIFqviNQLJEYcFbkcrz1o",
  authDomain: "hotel-main-2ddec.firebaseapp.com",
  projectId: "hotel-main-2ddec",
  storageBucket: "hotel-main-2ddec.appspot.com",
  messagingSenderId: "510691582192",
  appId: "1:510691582192:web:dd3c72d85cf323b1d06235",
  measurementId: "G-1BT2TJJFPT",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
