import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPT459AW4CMZcdSM8vF1w588OVG94tM0c",
  authDomain: "dropbox-e1ac2.firebaseapp.com",
  projectId: "dropbox-e1ac2",
  storageBucket: "dropbox-e1ac2.appspot.com",
  messagingSenderId: "1075130933180",
  appId: "1:1075130933180:web:be0ad3bd2b44bca2ee55b9"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
