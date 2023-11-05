// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdxQOCMUloOhMWe7Hzex3sdYgbKAsauj0",
  authDomain: "jobmarket-3967f.firebaseapp.com",
  projectId: "jobmarket-3967f",
  storageBucket: "jobmarket-3967f.appspot.com",
  messagingSenderId: "260746627467",
  appId: "1:260746627467:web:3cbb63f256e59c6bbd478e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default(auth)