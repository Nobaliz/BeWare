import React from 'react';
import './style.css';
require('dotenv').config();
//import ChatbotIA from './ChatbotIA'; // Importa el componente
import ChatbotComponent from './ChatbotComponent';


export default function App() {
  return (
    <div>
      <h1>BeWares</h1>
      <ChatbotComponent />
    </div>
  );
}
