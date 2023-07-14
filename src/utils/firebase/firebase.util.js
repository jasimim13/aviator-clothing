import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoaIPyGcCipsninT8769ktWYQVGC314oE",
  authDomain: "aviator-clth-db.firebaseapp.com",
  projectId: "aviator-clth-db",
  storageBucket: "aviator-clth-db.appspot.com",
  messagingSenderId: "717346634951",
  appId: "1:717346634951:web:75245f2b934f1aa937d2e2",
  measurementId: "G-V9HW06NDCB",
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth,provider)
