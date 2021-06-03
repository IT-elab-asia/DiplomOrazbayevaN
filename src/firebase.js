import firebase, { database } from "firebase";
// Импорт firebase в приложение 

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCtROcbwD_HbeEX8tvjtGIJITftYuvgp6c",
  authDomain: "ritzcarl-7459b.firebaseapp.com",
  projectId: "ritzcarl-7459b",
  storageBucket: "ritzcarl-7459b.appspot.com",
  messagingSenderId: "440563371539",
  appId: "1:440563371539:web:6d1d2125f339830a79b9e6",
  measurementId: "G-PXKXXFV7CR"
});

var db = firebaseApp.firestore();

export { db };

// API для подключения бд к проекту