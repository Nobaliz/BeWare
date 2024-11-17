import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Suponiendo que tu componente principal es 'App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import ChatbotComponent from './components/ChatbotComponent'; // Importa el componente

const App = () => {
  return (
    <div>
      <h1>Bienvenido a BeWare</h1>
      <ChatbotComponent />
    </div>
  );
};

export default App;

