import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config ={
    
  apiKey: "AIzaSyC-ecYKXeepmqoG7a3ZyP7y5aQDlo0Oyug",
  authDomain: "chit-chat-app-db12d.firebaseapp.com",
  projectId: "chit-chat-app-db12d",
  storageBucket: "chit-chat-app-db12d.appspot.com",
  messagingSenderId: "869749682739",
  appId: "1:869749682739:web:6beeb75cfea3e52d3a2946",
  measurementId: "G-TYSZCHF8FN"
};


const app = firebase.initializeApp(config);
export const auth=app.auth();
export const database = app.database();