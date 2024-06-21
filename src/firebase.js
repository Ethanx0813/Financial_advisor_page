import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBVdKcKGow_Vsu-z0GgMr8UHEFYii5NjN0",
  authDomain: "new-contact-form-5fab4.firebaseapp.com",
  projectId: "new-contact-form-5fab4",
  storageBucket: "new-contact-form-5fab4.appspot.com",
  messagingSenderId: "49611277574",
  appId: "1:49611277574:web:e8ab847565a25d29c2ca87"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
