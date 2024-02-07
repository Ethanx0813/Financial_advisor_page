import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBzRNoHwl9ZM8SvqaOPwGANLOY_pFn68GE",
    authDomain: "financial-advisor-86746.firebaseapp.com",
    projectId: "financial-advisor-86746",
    storageBucket: "financial-advisor-86746.appspot.com",
    messagingSenderId: "291619828775",
    appId: "1:291619828775:web:89fada4abb156da5200a02",
    databaseURL:"https://console.firebase.google.com/u/0/project/financial-advisor-86746/database/financial-advisor-86746-default-rtdb/data/~2F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
