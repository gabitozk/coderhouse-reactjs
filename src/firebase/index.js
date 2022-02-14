import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmSvMmrq6XgMQSJgmZ9n1jK73F0BfoBks",
  authDomain: "react-ecommerce-coder-22426.firebaseapp.com",
  projectId: "react-ecommerce-coder-22426",
  storageBucket: "react-ecommerce-coder-22426.appspot.com",
  messagingSenderId: "1039795993238",
  appId: "1:1039795993238:web:88525af081f321e4dfe0b7"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => {
    return firebase.firestore(app);
}