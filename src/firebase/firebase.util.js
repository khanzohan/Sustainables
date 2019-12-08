import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCA7qLcxaNJCWL-EH1t8CwJZc4wSadImVY",
    authDomain: "sustainables-db.firebaseapp.com",
    databaseURL: "https://sustainables-db.firebaseio.com",
    projectId: "sustainables-db",
    storageBucket: "sustainables-db.appspot.com",
    messagingSenderId: "641300671862",
    appId: "1:641300671862:web:d646183ee56c0a32aa9e57",
    measurementId: "G-7VJ11WEPYE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Could not create user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;