import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    // Crear el script de Botpress y cargarlo dinámicamente
    const scriptBotpress = document.createElement('script');
    scriptBotpress.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js?botId=05a8af5b-adad-4d10-a8d2-50700e113e5c';
    scriptBotpress.defer = true;

    // Crear el script de configuración de Botpress
    const scriptConfig = document.createElement('script');
    scriptConfig.src = 'https://files.bpcontent.cloud/2024/11/17/16/20241117160304-DC8OEVAB.js';
    scriptConfig.defer = true;

    // Crear el script de Toastify
    const scriptToastify = document.createElement('script');
    scriptToastify.src = 'https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.js';
    scriptToastify.defer = true;

    // Añadir los scripts al body
    document.body.appendChild(scriptBotpress);
    document.body.appendChild(scriptConfig);
    document.body.appendChild(scriptToastify);

    // Cuando el script de Botpress esté cargado, configurar los eventos
    scriptBotpress.onload = () => {
      window.botpress.on('*', (event) => {
        console.log(`Event: ${event.type}`);
      });

      window.botpress.on('webchat:ready', (conversationId) => {
        console.log(`Webchat Ready: ${conversationId}`);
      });

      window.botpress.on('webchat:opened', (conversationId) => {
        console.log(`Webchat Opened: ${conversationId}`);
      });

      window.botpress.on('webchat:closed', (conversationId) => {
        console.log(`Webchat Closed: ${conversationId}`);
      });

      window.botpress.on('conversation', (conversationId) => {
        console.log(`Conversation: ${conversationId}`);
      });

      window.botpress.on('message', (message) => {
        console.log(`Message Received: ${message.id}`);
      });

      window.botpress.on('messageSent', (message) => {
        console.log(`Message Sent: ${message}`);
      });

      window.botpress.on('error', (error) => {
        console.log(`Error: ${error}`);
      });

      window.botpress.on('webchatVisibility', (visibility) => {
        console.log(`Webchat Visibility: ${visibility}`);
      });

      window.botpress.on('webchatConfig', (visibility) => {
        console.log('Webchat Config');
      });

      window.botpress.on('customEvent', (anyEvent) => {
        console.log('Received a custom event');
      });
    };

    return () => {
      // Limpiar los scripts al desmontar el componente
      document.body.removeChild(scriptBotpress);
      document.body.removeChild(scriptConfig);
      document.body.removeChild(scriptToastify);
    };
  }, []);

  return (
    <div>
      <h1>Chatbot</h1>
      {/* Puedes agregar otros elementos del UI si lo deseas */}
    </div>
  );
};

export default ChatbotComponent;