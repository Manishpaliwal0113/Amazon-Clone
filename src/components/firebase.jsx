import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAFcWeYO0hAMJPCOIIiVq7uZ-8dyBDqv_M",
  authDomain: "clone-68a1f.firebaseapp.com",
  projectId: "clone-68a1f",
  storageBucket: "clone-68a1f.appspot.com",
  messagingSenderId: "761765104399",
  appId: "1:761765104399:web:707e13ffe76b1d08ae4c7a",
  measurementId: "G-V70R8X3XGP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const auth = firebase.auth();

export { auth } 


