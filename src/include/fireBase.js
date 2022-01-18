import fireBase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDy-PT9LZf7k6o-9I0H19bpaSEFRd7vchQ',
  authDomain: 'music-f0f8c.firebaseapp.com',
  projectId: 'music-f0f8c',
  storageBucket: 'music-f0f8c.appspot.com',
  messagingSenderId: '165780687073',
  appId: '1:165780687073:web:b8cd72cbb06c7554dc8fa0',
};

// Initialize Firebase
const app = fireBase.initializeApp(firebaseConfig);
export default app;
