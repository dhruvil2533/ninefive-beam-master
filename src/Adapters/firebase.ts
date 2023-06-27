import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIxXxv3WiPQ2-8h1e3C5sTmipGdQmzu_w",
  authDomain: "nine-five-64420.firebaseapp.com",
  projectId: "nine-five-64420",
  storageBucket: "nine-five-64420.appspot.com",
  messagingSenderId: "929885422440",
  appId: "1:929885422440:web:65267d0ffcd66ec9f90cdd",
  measurementId: "G-1RTE69XNE8",
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
