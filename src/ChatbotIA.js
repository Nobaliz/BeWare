import React, { useState, useEffect } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const webhookUrl = 'https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/17/16/20241117160304-E5R1Z26H.json'; // Reemplaza con tu URL

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar mensaje al webhook de Botpress
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: userInput
      })
    })
    .then(response => response.json())
    .then((data) => {
      // Agregar el mensaje del usuario y la respuesta del bot a la lista de mensajes
      setMessages([...messages, { role: 'user', content: userInput }, { role: 'bot', content: data.message }]);
      setUserInput('');
    });
  };

  // ... Resto del componente para mostrar los mensajes
}