import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKouFnDfDuTrQpctFo3CJ-A58ftoPcQQk",
  authDomain: "clone-1e996.firebaseapp.com",
  databaseURL: "https://clone-1e996.firebaseio.com",
  projectId: "clone-1e996",
  storageBucket: "clone-1e996.appspot.com",
  messagingSenderId: "470045746291",
  appId: "1:470045746291:web:456a18789c2d1ddd0e7606",
  measurementId: "G-RXV528KTSD",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
