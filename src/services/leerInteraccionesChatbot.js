import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const leerInteraccionesChatbot = async () => {
  const interacciones = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'interaccionesChatbot'));
    querySnapshot.forEach((doc) => {
      interacciones.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error('Error al leer las interacciones de chatbot:', error);
  }
  return interacciones;
};

export default leerInteraccionesChatbot;