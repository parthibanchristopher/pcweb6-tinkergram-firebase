// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCljNyjVufjWQziy3zvp5K_EyPQSCe7d0",
    authDomain: "pcweb6-1d5f1.firebaseapp.com",
    projectId: "pcweb6-1d5f1",
    storageBucket: "pcweb6-1d5f1.appspot.com",
    messagingSenderId: "797216529514",
    appId: "1:797216529514:web:9c9054312d1fdc62d5be13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);