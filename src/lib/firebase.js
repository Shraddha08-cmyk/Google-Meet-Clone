import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAdmEA6IaYMGc8dnw8fkV7Uf-Sm4MeupWA",
    authDomain: "meet-clone-yt-b1450.firebaseapp.com",
    projectId: "meet-clone-yt-b1450",
    storageBucket: "meet-clone-yt-b1450.appspot.com",
    messagingSenderId: "885881642779",
    appId: "1:885881642779:web:ac940a9901fde9cbf83dbe",
    measurementId: "G-HD8T7YH8CN"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();