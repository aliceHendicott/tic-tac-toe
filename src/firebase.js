import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkeVrF4C9Zr390ZWAwtWxQ5W5-6oUpiXk",
  authDomain: "tic-tac-toe-5b255.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-5b255.firebaseio.com",
  projectId: "tic-tac-toe-5b255",
  storageBucket: "tic-tac-toe-5b255.appspot.com",
  messagingSenderId: "962418034830",
  appId: "1:962418034830:web:07d2f9bc70e0dd27cc21df"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default firebase;
export { database };
