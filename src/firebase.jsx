import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDO5RTII0bqdmKtHtU40YTXfaEViJLrZo4",
  authDomain: "dashboard-db9bf.firebaseapp.com",
  projectId: "dashboard-db9bf",
  storageBucket: "dashboard-db9bf.appspot.com",
  messagingSenderId: "237902158997",
  appId: "1:237902158997:web:4893ecdabe705e0211cf9c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
