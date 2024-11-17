import React, { useState } from 'react';
import axios from 'axios';


export default function ChatbotComponent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: 'Hola', max_tokens: 50 }),
      });
  
      if (response.status === 429) {
        console.warn('Se excedió el límite de solicitudes, reintentando...');
        setTimeout(handleSendMessage, 3000); // Reintento después de 3 segundos
        return;
      }
  
      const data = await response.json();
      console.log('Respuesta de la API:', data);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <div>
      <h2>Chat con IA</h2>
      <textarea 
        value={input} 
        onChange={handleInputChange} 
        placeholder="Escribe tu mensaje" 
      />
      <button onClick={handleSend}>Enviar</button>
      <div>
        <h3>Respuesta de la IA:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
}
