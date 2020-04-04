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

export const createCollectionAndAddDocs = async (collectionName, documentsArray) => {

  const collectionRef = firestore.collection(collectionName);

  const batch = firestore.batch();

  documentsArray.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })

  return await batch.commit();
}

export const createShopItemsFromCollectionsSnapshoot = (collectionsSnapshot) => {
  const collectionArray = collectionsSnapshot.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    }
  })

  return collectionArray.reduce((acc, currentItem) => {
    acc[currentItem.title.toLowerCase()] = currentItem;
    return acc;
  }, {});
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      unSubscribeFromAuth();
      resolve(userAuth);
    }, reject);
  })
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Auth with google account
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;