// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw7acjyfh7ZQ664MZeHHaJXQOSKyaiKok",
  authDomain: "memessage-9abbc.firebaseapp.com",
  projectId: "memessage-9abbc",
  storageBucket: "memessage-9abbc.appspot.com",
  messagingSenderId: "499243424791",
  appId: "1:499243424791:web:02e8544e2202ebea5b5052",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
 export const db =getFirestore(app)