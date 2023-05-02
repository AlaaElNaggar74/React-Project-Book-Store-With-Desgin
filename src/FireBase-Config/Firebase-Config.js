import { initializeApp } from "firebase/app";

import {getAuth ,GoogleAuthProvider} from "firebase/auth";

import {getFirestore} from  "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyATyPwDjn13wWQUX1DKfl40ZrEgpr38WVk",
  authDomain: "fir-tranining-8fd4d.firebaseapp.com",
  projectId: "fir-tranining-8fd4d",
  storageBucket: "fir-tranining-8fd4d.appspot.com",
  messagingSenderId: "678867905611",
  appId: "1:678867905611:web:75f8d1f94ce8aa1f5af1ce"
};

const app = initializeApp(firebaseConfig);
let auth=getAuth(app)
let db=getFirestore(app)
let googleProvider=new GoogleAuthProvider()

export {auth,db,googleProvider}


