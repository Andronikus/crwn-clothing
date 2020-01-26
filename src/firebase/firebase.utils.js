import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDG_dfq3Yscr7dSqgCTlCRDZ2xF3iRQ53U', //process.env.REACT_APP_apiKey,
  authDomain: 'crwn-db-71f0e.firebaseapp.com', //process.env.REACT_APP_authDomain,
  databaseURL: 'https://crwn-db-71f0e.firebaseio.com', //process.env.REACT_APP_databaseURL,
  projectId: 'crwn-db-71f0e', //process.env.REACT_APP_projectId,
  storageBucket: 'crwn-db-71f0e.appspot.com', //process.env.REACT_APP_storageBucket,
  messagingSenderId: '597184802196', //process.env.REACT_APP_messagingSenderId,
  appId: '1:597184802196:web:990d3ca30d7043a1fbf38' //process.env.REACT_APP_appId
};

export const createUserProfileDocument = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Auth with google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;