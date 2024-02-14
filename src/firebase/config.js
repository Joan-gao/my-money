import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDWN3sSX4uStMtgmrS7F9B_u1kQFxeEoXk',
  authDomain: 'mymoney-eea9d.firebaseapp.com',
  projectId: 'mymoney-eea9d',
  storageBucket: 'mymoney-eea9d.appspot.com',
  messagingSenderId: '134151097178',
  appId: '1:134151097178:web:49e6ea9aee37663ee80163',
  measurementId: 'G-6B9S81HK9Y',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
