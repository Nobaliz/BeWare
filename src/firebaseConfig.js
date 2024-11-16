import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwMhTDADV_q2SXNbzpm9XwEIroiQVaHLY",
  authDomain: "chatbot-ia-database.firebaseapp.com",
  projectId: "chatbot-ia-database",
  storageBucket: "chatbot-ia-database.appspot.com",
  messagingSenderId: "358699844559",
  appId: "1:358699844559:web:f4f26b7a724c5aeb0988ba",
  measurementId: "G-BJ8ZWB03D0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };