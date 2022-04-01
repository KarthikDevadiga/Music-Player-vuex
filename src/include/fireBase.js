import fireBase from 'firebase/app'; // core of firebase sdk
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// auth stores only some imformation like name and email and passwords
// if we want store addition information we have to store it in database
// in firbase database(newer databse) is called as firestore.
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
const auth = fireBase.auth(); // returns an object which then will be passed to registration.vue
const db = fireBase.firestore(); // Initialize an instance of Cloud Firestore: https://firebase.google.com/docs/firestore/quickstart?authuser=0#initialize
const storage = fireBase.storage();
// const ref = fireBase.ref();
const userData = db.collection('users');
const songData = db.collection('songData'); // "users" is name of our collection
// "users" is name of our collection
// prettier-ignore
export {
  auth, userData, storage, songData,
};
