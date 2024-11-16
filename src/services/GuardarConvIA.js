import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();

const saveConversation = async (userMessage, botResponse) => {
  try {
    await addDoc(collection(db, "chatHistory"), {
      userMessage,
      botResponse,
      timestamp: new Date()
    });
  } catch (error) {
    console.error("Error al guardar la conversación:", error);
  }
};