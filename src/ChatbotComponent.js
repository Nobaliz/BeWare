import React, { useState, useEffect } from 'react';

const ChatbotComponent = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js?botId=05a8af5b-adad-4d10-a8d2-50700e113e5c";   

    script.onload = () => {
      setIsScriptLoaded(true);
      if (window.botpressWebChat) {
        try {
          window.botpressWebChat.init({
            host: 'https://cdn.botpress.cloud/webchat/v2.2',
            configUrl: 'https://files.bpcontent.cloud/2024/11/17/16/20241117160304-E5R1Z26H.json',
            messagingUrl: "/webchat/v2.2",
            botId: '05a8af5b-adad-4d10-a8d2-50700e113e5c',
            clientId: '69921ff8-b819-4937-9b0c-8ef0b574dd6',
            hideWidget: false,
            showBotName: true,
            showBotAvatar: true
          });
        } catch (err) {
          setError(err.message);
        }
      } else {
        setError("El script de Botpress no se cargó correctamente.");
      }    
    };
    script.onerror = () => {
      setError("Error al cargar el script del chatbot.");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Chatbot</h1>
      {error && <p>Error: {error}</p>}
      {!isScriptLoaded && <p>Cargando chatbot...</p>}
      {/* El chat se carga automáticamente dentro del Webchat */}
    </div>
  );
};

export default ChatbotComponent;