import React, { useState } from 'react';
import guardarInteraccionChatbot from './services/guardarInteraccionChatbot';

const ChatbotIA = () => {
  const [pregunta, setPregunta] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const idChatbot = Date.now(); // (Generar un ID temporal)

  const handleSend = () => {
    const interaccion = {
      diagnosticoPreliminar: diagnostico,
      fechaInteraccion: new Date().toISOString(),
      idChatbot: idChatbot,
      preguntas: [pregunta],
      recomendacion: "Intenta ejercicios de respiración profunda.",
      respuestaChat: respuesta
    };

    guardarInteraccionChatbot(interaccion);
  };

  return (
    <div>
      <h2>Chatbot de Apoyo Emocional</h2>
      <textarea
        placeholder="Escribe tu pregunta"
        value={pregunta}
        onChange={(e) => setPregunta(e.target.value)}
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
};

export default ChatbotIA;