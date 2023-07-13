/*import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  
})
export default app
export const auth = app.auth()*/
 
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAwBgARxvEsgNRKi6dlg3e-ijhwPHZqFs",
  authDomain: "ecommerce-4a2b4.firebaseapp.com",
  projectId: "ecommerce-4a2b4",
  storageBucket: "ecommerce-4a2b4.appspot.com",
  messagingSenderId: "318440103713",
  appId: "1:318440103713:web:b7932824a9b4c647cde860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app, "gs://ecommerce-4a2b4.appspot.com");


export default app