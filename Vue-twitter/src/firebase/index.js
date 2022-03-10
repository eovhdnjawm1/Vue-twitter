// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
