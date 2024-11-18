import React, { useEffect } from 'react';
import { escribirDatosEnFirebase, leerDatosDeFirebase } from './services/interacionServices'; // Importa las funciones de Firebase

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

    // Configurar eventos de Botpress
    window.botpress.on('messageSent', (message) => {
      console.log('Mensaje enviado:', message);
      escribirDatosEnFirebase('ChatbotIA', {
        FechaInteracion: new Date().toISOString(),
        MensajeUsuario: message.text,
        PreguntaChat: 'Pregunta del usuario', // Modifica según tu estructura
        RespuestaChat: 'Respuesta', // Modifica según lo que quieras almacenar
        Recomendacion: 'Recomendación si aplica',
        diagnosticoPreliminar: 'Texto de diagnóstico si aplica',
      });
    });

    window.botpress.on('message', (message) => {
      console.log('Mensaje recibido:', message);
      leerDatosDeFirebase('ChatbotIA')
        .then((data) => {
          console.log('Datos leídos de Firebase:', data);
        })
        .catch((error) => {
          console.error('Error al leer datos de Firebase:', error);
        });
    });

    return () => {
      document.body.removeChild(scriptBotpress);
      document.body.removeChild(scriptConfig);
      document.body.removeChild(scriptToastify);
    };
  }, []);

  return (
    <div>
      <h1>Chatbot</h1>
      {/* Agrega más elementos de UI si lo necesitas */}
    </div>
  );
};

export default ChatbotComponent;
