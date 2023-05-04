import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyCqxx8ZXEQfdDkPY6i97OIQ5ljlP5F3YZE",
  authDomain: "fire-gram-dda12.firebaseapp.com",
  projectId: "fire-gram-dda12",
  storageBucket: "fire-gram-dda12.appspot.com",
  messagingSenderId: "954579136339",
  appId: "1:954579136339:web:2f23055617c4ae254bfba6"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp }
