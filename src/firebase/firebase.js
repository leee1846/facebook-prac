import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKbDYisFL3xijIm4Jk_HWGjOmtNYK6D1M",
  authDomain: "facebook-clone-8f796.firebaseapp.com",
  projectId: "facebook-clone-8f796",
  storageBucket: "facebook-clone-8f796.appspot.com",
  messagingSenderId: "542454791931",
  appId: "1:542454791931:web:92b7695e0614a0a9b4ba5e",
  measurementId: "G-FL1MECR0BM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
