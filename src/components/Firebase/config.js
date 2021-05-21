import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDBmBBoiCQduBNfN5rp5TyxnNwuqP_1zVk",
  authDomain: "react-firegramm.firebaseapp.com",
  projectId: "react-firegramm",
  storageBucket: "react-firegramm.appspot.com",
  messagingSenderId: "212589713879",
  appId: "1:212589713879:web:f3026c886614787749d392",
};

export const initializeLoginFramework = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timeStamp };
