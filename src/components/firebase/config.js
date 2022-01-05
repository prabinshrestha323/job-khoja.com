import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
var firebaseConfig = {
    apiKey: "AIzaSyAodVv5pxZ5CEMtNpeudWNCLXZrTi8QhPs",
    authDomain: "job-listing-d473b.firebaseapp.com",
    projectId: "job-listing-d473b",
    storageBucket: "job-listing-d473b.appspot.com",
    messagingSenderId: "920932645505",
    appId: "1:920932645505:web:08a459ca3a34578c37eb80"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 const firestore= firebase.firestore();

 export default firebase; 
 export {firestore}
 