import React, { useState, useEffect } from "react";
import Login from "./Login"; // Importar la pantalla de Login
import RegistroEmocion from "./RegistroEmocion";
import RegistroHoras from "./RegistroHoras";
import AfirmacionesDiarias from "./AfirmacionesDiarias";
import ChatbotComponent from "./ChatbotComponent"; // Importar el Chatbot

const App = () => {
  const [pagina, setPagina] = useState("login");

  const renderizarPagina = () => {
    switch (pagina) {
      case "login":
        return <Login onLogin={() => setPagina("menu")} />;
      case "registroEmocion":
        return <RegistroEmocion />;
      case "registroHoras":
        return <RegistroHoras />;
      case "afirmaciones":
        return <AfirmacionesDiarias setPagina={setPagina} />;
      case "menu":
        return (
          <div style={styles.menu}>
            <h1 style={styles.titulo}>Bienvenido, usuario</h1>
            <div style={styles.botonesContenedor}>
              <button
                style={styles.boton}
                onClick={() => setPagina("registroEmocion")}
              >
                ❤️ Registro de Emociones
              </button>
              <button
                style={styles.boton}
                onClick={() => setPagina("registroHoras")}
              >
                🕒 Registro de Horas
              </button>
              <button
                style={styles.boton}
                onClick={() => setPagina("afirmaciones")}
              >
                ⭐ Afirmaciones Diarias
              </button>
            </div>
            {/* Se agrega una condición aquí para que solo se muestre el ChatbotComponent si estamos en el menú */}
            {pagina === "menu" && pagina !== "login"&& <ChatbotComponent />}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.app}>
      {renderizarPagina()}
      {pagina !== "login" && pagina !== "menu" && (
        <button style={styles.volver} onClick={() => setPagina("menu")}>
          ⬅ Volver al Menú
        </button>
      )}
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  menu: {
    padding: "20px",
  },
  titulo: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#4A4A4A",
  },
  botonesContenedor: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    justifyContent: "center",
  },
  boton: {
    padding: "20px",
    backgroundColor: "#F9F9F9",
    border: "1px solid #E0E0E0",
    borderRadius: "10px",
    fontSize: "16px",
    color: "#333",
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  volver: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
