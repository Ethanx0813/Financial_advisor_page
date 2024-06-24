import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBS3Ot1YGQN3UKZZgH6ToOcgfoQeyNKX6Y",
  authDomain: "ad-landing-22beb.firebaseapp.com",
  projectId: "ad-landing-22beb",
  storageBucket: "ad-landing-22beb.appspot.com",
  messagingSenderId: "608187800001",
  appId: "1:608187800001:web:484b3af283929a6920b740"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
