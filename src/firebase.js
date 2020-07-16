import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACcDct-p6VCYe29oIVLOtcFJt_onUjw3g",
  authDomain: "login-register-page-53e16.firebaseapp.com",
  databaseURL: "https://login-register-page-53e16.firebaseio.com",
  projectId: "login-register-page-53e16",
  storageBucket: "login-register-page-53e16.appspot.com",
  messagingSenderId: "700802498752",
  appId: "1:700802498752:web:b915f951b2ddff2de52d25",
};

firebase.initializeApp(firebaseConfig);

export const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export const firestore = firebase.firestore();

export default firebase;
