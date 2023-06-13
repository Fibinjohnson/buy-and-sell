import firebase from "firebase"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKsxr0ckfjxznYGtuZpceD5rDvaOqLuas",
  authDomain: "fir-9c00d.firebaseapp.com",
  projectId: "fir-9c00d",
  storageBucket: "fir-9c00d.appspot.com",
  messagingSenderId: "492060025410",
  appId: "1:492060025410:web:1a67e5a1cf1e7f326803db",
  measurementId: "G-7XFJ6QMRY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const Firebase=firebase.initializeApp(firebaseConfig);