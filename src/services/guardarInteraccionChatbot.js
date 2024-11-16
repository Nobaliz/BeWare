import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const guardarInteraccionChatbot = async (interaccion) => {
  try {
    await addDoc(collection(db, 'interaccionesChatbot'), {
      diagnosticoPreliminar: interaccion.diagnosticoPreliminar,
      fechaInteraccion: interaccion.fechaInteraccion,
      idChatbot: interaccion.idChatbot,
      preguntas: interaccion.preguntas,
      recomendacion: interaccion.recomendacion,
      respuestaChat: interaccion.respuestaChat
    });
    console.log('Interacción de chatbot guardada exitosamente');
  } catch (error) {
    console.error('Error al guardar la interacción de chatbot:', error);
  }
};

export default guardarInteraccionChatbot;
