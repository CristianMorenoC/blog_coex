import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA58Is9XyL2mUGDqXMwbFrQs_X_V50O7LY",
  authDomain: "blog-coex.firebaseapp.com",
  projectId: "blog-coex",
  storageBucket: "blog-coex.appspot.com",
  messagingSenderId: "122934693022",
  appId: "1:122934693022:web:4de79e8f9fa78263133f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db