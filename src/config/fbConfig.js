import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { initializeApp } from "firebase/app";
// import { 
//     getFirestore,
//     collection,
//     getDoc,
//     doc,
//     addDoc,
//     setDoc,
//     updateDoc
// } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBULnjdRPi5dx270drM_taxNktnEFRxzFI",
  authDomain: "fud-blog-5778f.firebaseapp.com",
  projectId: "fud-blog-5778f",
  storageBucket: "fud-blog-5778f.appspot.com",
  messagingSenderId: "816936786258",
  appId: "1:816936786258:web:9aed860d53a937bdc0828b",
  measurementId: "G-3HBH22P1BF"
};

// Initialize Firebase
// const firebase = initializeApp(fbConfig);
// export const db = getFirestore(firebase)

firebase.initializeApp(firebaseConfig);
firebase.firestore();

// export { 
//     getFirestore,
//     collection,
//     getDoc,
//     doc,
//     addDoc,
//     setDoc,
//     updateDoc
// }
// const analytics = getAnalytics(app);
export default firebase