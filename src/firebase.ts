import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyArDL8wzj_HMxoAX2An5FjXvM74K_aC0L8",
  authDomain: "dicord-clone-c2650.firebaseapp.com",
  projectId: "dicord-clone-c2650",
  storageBucket: "dicord-clone-c2650.appspot.com",
  messagingSenderId: "224837717431",
  appId: "1:224837717431:web:3ef2a24b87e780a826ec32"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };