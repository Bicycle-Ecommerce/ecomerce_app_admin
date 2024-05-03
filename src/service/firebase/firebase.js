import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const app = initializeApp({

});

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
export default app;
