import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAOvr7fRzoz29VmWYArgIRB7M3L_QwbhDw",
    authDomain: "firequiz-c8932.firebaseapp.com",
    databaseURL: "https://firequiz-c8932.firebaseio.com",
    projectId: "firequiz-c8932",
    storageBucket: "firequiz-c8932.appspot.com",
    messagingSenderId: "426453409889"
});

export default firebase;