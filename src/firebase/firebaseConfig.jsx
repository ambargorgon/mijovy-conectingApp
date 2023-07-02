import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth} from "firebase/auth"

// Initialize Firebase
let config = {
  apiKey: "AIzaSyA6eEAIqPy2yz2tAYIAqm1unUR-K7dZZj4",
  authDomain: "mijovy-d2302.firebaseapp.com",
  databaseURL: "https://mijovy-d2302-default-rtdb.firebaseio.com",
  projectId: "mijovy-d2302",
  storageBucket: "mijovy-d2302.appspot.com",
  messagingSenderId: "467375038847",
  appId: "1:467375038847:web:38f3b0ddbbc27ee727ba4a"
}

export const FIREBASE_APP = initializeApp(config)

export const auth = getAuth(FIREBASE_APP);

export const db = getFirestore(FIREBASE_APP);



// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA6eEAIqPy2yz2tAYIAqm1unUR-K7dZZj4",
//   authDomain: "mijovy-d2302.firebaseapp.com",
//   databaseURL: "https://mijovy-d2302-default-rtdb.firebaseio.com",
//   projectId: "mijovy-d2302",
//   storageBucket: "mijovy-d2302.appspot.com",
//   messagingSenderId: "467375038847",
//   appId: "1:467375038847:web:38f3b0ddbbc27ee727ba4a"
// };

// // Initialize Firebase
// export const FIREBASE_APP = initializeApp(firebaseConfig);
// export default auth = getAuth(FIREBASE_APP);
// export const FIREBASE_EMAIL = new EmailAuthProvider()