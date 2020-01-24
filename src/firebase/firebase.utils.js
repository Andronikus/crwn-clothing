import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDG_dfq3Yscr7dSqgCTlCRDZ2xF3iRQ53U",
    authDomain: "crwn-db-71f0e.firebaseapp.com",
    databaseURL: "https://crwn-db-71f0e.firebaseio.com",
    projectId: "crwn-db-71f0e",
    storageBucket: "crwn-db-71f0e.appspot.com",
    messagingSenderId: "597184802196",
    appId: "1:597184802196:web:990d3ca30d7043a1fbf381"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Auth with google account
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;