import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1U41lU8TqzrosWNeAQGYngFGnYA-tb6s",
  authDomain: "netflix-clone-1a502.firebaseapp.com",
  projectId: "netflix-clone-1a502",
  storageBucket: "netflix-clone-1a502.appspot.com",
  messagingSenderId: "1002810935090",
  appId: "1:1002810935090:web:eaf1095237f05e25eb392b",
  measurementId: "G-Y1KJNG1JYF"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;