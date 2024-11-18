import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(); // Al enviar el formulario, se redirige al menú principal
  };

  return (
    <div style={styles.contenedor}>
      <h1 style={styles.titulo}>BeWare - Tu Asistente de Apoyo Emocional</h1>
      <div style={styles.tabs}>
        <button
          style={{ ...styles.tab, borderBottom: !isSignUp ? "2px solid #6200EA" : "none" }}
          onClick={() => setIsSignUp(false)}
        >
          Sign In
        </button>
        <button
          style={{ ...styles.tab, borderBottom: isSignUp ? "2px solid #6200EA" : "none" }}
          onClick={() => setIsSignUp(true)}
        >
          Sign Up
        </button>
      </div>
      <form onSubmit={handleSubmit} style={styles.formulario}>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.boton}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      {!isSignUp && <p style={styles.enlace}>Forgot Password?</p>}
    </div>
  );
};

const styles = {
  contenedor: {
    textAlign: "center",
    padding: "20px",
  },
  titulo: {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#333",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    cursor: "pointer",
    background: "none",
    border: "none",
    fontSize: "16px",
    color: "#6200EA",
  },
  formulario: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  boton: {
    width: "80%",
    padding: "10px",
    backgroundColor: "#6200EA",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  enlace: {
    marginTop: "10px",
    color: "#6200EA",
    cursor: "pointer",
  },
};

export default Login;