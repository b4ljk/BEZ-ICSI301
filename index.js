// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyARvS2BcfjF8fmEVuoC1YFoQqNadA52-ZQ",
	authDomain: "monbakery-32a8e.firebaseapp.com",
	projectId: "monbakery-32a8e",
	storageBucket: "monbakery-32a8e.appspot.com",
	messagingSenderId: "246831590849",
	appId: "1:246831590849:web:f022b50688f7d6d5321340",
	measurementId: "G-P4QBW1W8DM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
