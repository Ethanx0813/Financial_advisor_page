import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDapT-pd1pXMAUhRCiOk512vt2gcPuZbck",
    authDomain: "contact-form-fb30d.firebaseapp.com",
    projectId: "contact-form-fb30d",
    storageBucket: "contact-form-fb30d.appspot.com",
    messagingSenderId: "832424629791",
    appId: "1:832424629791:web:b478414d69ea191d91272a"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
