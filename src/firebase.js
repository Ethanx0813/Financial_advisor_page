import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBHjZyDACzY_oX8fPHi6U1VtjbNtkY5WXE",
  authDomain: "investingmymoney.firebaseapp.com",
  projectId: "investingmymoney",
  storageBucket: "investingmymoney.appspot.com",
  messagingSenderId: "305999165078",
  appId: "1:305999165078:web:1a31ebb6849e02926274b7"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
