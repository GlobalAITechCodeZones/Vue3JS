// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5ex6Q8W18NjtzpLQexhoKUULZtOfLbp8",
  authDomain: "vuejs3-17412.firebaseapp.com",
  databaseURL:"https://vuejs3-17412.firebaseio.com",
  projectId: "vuejs3-17412",
  storageBucket: "vuejs3-17412.appspot.com",
  messagingSenderId: "484270326404",
  appId: "1:484270326404:web:710b0325cd18974501f8d1",
  measurementId: "G-FKXQVF3QLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const analytics = getAnalytics(app)

export {app, auth}