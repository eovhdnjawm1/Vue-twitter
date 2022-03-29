// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore} from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCm757eLh2p47ADs7Mx7xbrtcdSC5pRQIc",
  authDomain: "twitter-clone-youngjin.firebaseapp.com",
  projectId: "twitter-clone-youngjin",
  storageBucket: "twitter-clone-youngjin.appspot.com",
  messagingSenderId: "123439561194",
  appId: "1:123439561194:web:90d2c10fab95b21e6f1a93",
  measurementId: "G-3830ZL0CJR"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
export const USER_COLEECTION = db.collection('users')
export const TWEET_COLEECTION = db.collection('tweets')
export const COMMENT_COLLECTION = db.collection('comments')
// export const auth = getAuth()

// export const db = getFirestore()

// export const storage = getStorage()




