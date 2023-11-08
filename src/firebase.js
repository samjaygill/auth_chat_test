import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDLz4q21Z2Tai1c63Ij2jqxD1bHPc2XCso",
    authDomain: "chattest-c103e.firebaseapp.com",
    projectId: "chattest-c103e",
    storageBucket: "chattest-c103e.appspot.com",
    messagingSenderId: "960185604151",
    appId: "1:960185604151:web:50e6aaaf7d7942f84a47b2"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()


