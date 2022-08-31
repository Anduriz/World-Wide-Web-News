// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZSr-wKmvtqZIA4mIqNPex5H5GNMXB0Xk",
  authDomain: "world-wide-web-news-app.firebaseapp.com",
  projectId: "world-wide-web-news-app",
  storageBucket: "world-wide-web-news-app.appspot.com",
  messagingSenderId: "810169379619",
  appId: "1:810169379619:web:f36dd0f62e9805c5863a96"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(firebaseApp);
export const FirebaseFirestore = getFirestore(firebaseApp);