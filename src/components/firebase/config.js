import app from "firebase/app";
import "firebase/firestore"
 
var firebaseConfig = {
    apiKey: "AIzaSyAodVv5pxZ5CEMtNpeudWNCLXZrTi8QhPs",
    authDomain: "job-listing-d473b.firebaseapp.com",
    projectId: "job-listing-d473b",
    storageBucket: "job-listing-d473b.appspot.com",
    messagingSenderId: "920932645505",
    appId: "1:920932645505:web:08a459ca3a34578c37eb80"
  };
  
  // Initialize Firebase
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = app.firestore();


  export {firebase,firestore,  app};