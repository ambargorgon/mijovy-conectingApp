// import {initializeApp} from "firebase/app";
// import {getAuth} from'firebase/auth';
// import {getFirestore} from 'firebase/firestore';
// // Initialize Firebase
// let config = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// }

// export const FIREBASE_APP = initializeApp(config)

// export const auth = getAuth(FIREBASE_APP);

// export const db = getFirestore(FIREBASE_APP);

// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const emailAuthProvider = new firebase.auth.EmailAuthProvider();

// export { googleAuthProvider, emailAuthProvider };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6eEAIqPy2yz2tAYIAqm1unUR-K7dZZj4",
  authDomain: "mijovy-d2302.firebaseapp.com",
  databaseURL: "https://mijovy-d2302-default-rtdb.firebaseio.com",
  projectId: "mijovy-d2302",
  storageBucket: "mijovy-d2302.appspot.com",
  messagingSenderId: "467375038847",
  appId: "1:467375038847:web:38f3b0ddbbc27ee727ba4a"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export default auth = getAuth(FIREBASE_APP);
export const FIREBASE_GOOGLE = new GoogleAuthProvider()
export const FIREBASE_EMAIL = new EmailAuthProvider()