import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDN1nc0KodUrCdbXQR6shiA0DK2s8r1DXU",
  authDomain: "crwn-db-c423b.firebaseapp.com",
  projectId: "crwn-db-c423b",
  storageBucket: "crwn-db-c423b.appspot.com",
  messagingSenderId: "617338933707",
  appId: "1:617338933707:web:9dd11161d4aa8d1dee264e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
