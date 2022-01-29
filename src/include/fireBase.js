import fireBase from 'firebase/app'; // core of firebase sdk
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDy-PT9LZf7k6o-9I0H19bpaSEFRd7vchQ',
  authDomain: 'music-f0f8c.firebaseapp.com',
  projectId: 'music-f0f8c',
  storageBucket: 'music-f0f8c.appspot.com',
  messagingSenderId: '165780687073',
  appId: '1:165780687073:web:b8cd72cbb06c7554dc8fa0',
};

// Initialize Firebase
fireBase.initializeApp(firebaseConfig);
const auth = fireBase.auth();
const db = fireBase.firestore(); // Initialize an instance of Cloud Firestore: https://firebase.google.com/docs/firestore/quickstart?authuser=0#initialize
const userData = db.collection('users');
export { auth, userData };
