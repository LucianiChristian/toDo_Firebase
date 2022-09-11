import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCABwl09zpJaU5nLOJleMqjuvOAC32Eu4c",
    authDomain: "todo-firebase-e89f1.firebaseapp.com",
    projectId: "todo-firebase-e89f1",
    storageBucket: "todo-firebase-e89f1.appspot.com",
    messagingSenderId: "447933653280",
    appId: "1:447933653280:web:68c53bee0b99d1ce41b745",
    measurementId: "G-KRB6W674F0"
});

const db = firebaseApp.firestore();

export default db;