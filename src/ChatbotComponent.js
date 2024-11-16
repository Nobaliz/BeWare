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
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }]
        },
        {
          headers: {
            'Authorization': `Bearer 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`,
            'Content-Type': 'application/json'
          }
        }
      );
      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error('Error al llamar a la API de OpenAI:', error);
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
