import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBmekwtYyf6O2zN_lDOTs3yMimRTULSn-Q",
    authDomain: "twitter-clone-c039d.firebaseapp.com",
    projectId: "twitter-clone-c039d",
    storageBucket: "twitter-clone-c039d.appspot.com",
    messagingSenderId: "762789871480",
    appId: "1:762789871480:web:6c95b1fd3dfde81749d28d"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstancec = firebase;
export const authService = firebase.auth();
