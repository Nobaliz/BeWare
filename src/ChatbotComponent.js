import React, { useEffect } from 'react';

const ChatbotComponent = () => {
  useEffect(() => {
    // Asegurarse de que el script se haya cargado correctamente
    const script = document.createElement('script');
    script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js?botId=69921ff8-b819-4937-9b0c-8ef0b574dd67";
    script.onload = () => {
      // Ahora inicializamos el Webchat de Botpress
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: '69921ff8-b819-4937-9b0c-8ef0b574dd67',
          host: 'https://cdn.botpress.cloud/webchat/v2.2',
          configUrl: 'https://files.bpcontent.cloud/2024/11/17/16/20241117160304-E5R1Z26H.json',
          messagingUrl: "/webchat/v2.2",
          hideWidget: false,
          showBotName: true,
          showBotAvatar: true
        });
      } else {
        console.error("El Webchat de Botpress no se pudo cargar.");
      }
    };
    document.body.appendChild(script); // Agrega el script al body de la página

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1></h1>
      <p>Estamos aquí para ofrecerte apoyo emocional. Si necesitas hablar, el chatbot está listo para ayudarte.</p>
      {/* El chat se carga automáticamente dentro del Webchat */}
    </div>
  );
};

export default ChatbotComponent;