import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDtoSACZ1GddvFpW1qNbHgjpUvfPMEm1Gc",
    authDomain: "simple-notes-c55b7.firebaseapp.com",
    projectId: "simple-notes-c55b7",
    storageBucket: "simple-notes-c55b7.appspot.com",
    messagingSenderId: "958517756008",
    appId: "1:958517756008:web:6ac2b8bab3c94bd201fbdd",
    measurementId: "G-GK4KE7FRLB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
