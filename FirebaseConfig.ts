import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIO8cFr5bZPBImRH0_x0bGUHf5G-eJeX0",
  authDomain: "cs184hw02.firebaseapp.com",
  projectId: "cs184hw02",
  storageBucket: "cs184hw02.appspot.com",
  messagingSenderId: "326607194685",
  appId: "1:326607194685:web:11c1d5c13a8eec353ef854"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);