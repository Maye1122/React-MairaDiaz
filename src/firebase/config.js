// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDeS36apH0Pvci_89hs8565249HaqWj6FM",
	authDomain: "ecomerce-mairadiaz.firebaseapp.com",
	projectId: "ecomerce-mairadiaz",
	storageBucket: "ecomerce-mairadiaz.appspot.com",
	messagingSenderId: "131489044643",
	appId: "1:131489044643:web:25e90f2d7ed4816172c716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
