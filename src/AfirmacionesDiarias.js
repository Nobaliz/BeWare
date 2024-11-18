import React, { useState, useEffect } from "react";

const AfirmacionesDiarias = () => {
  const [affirmation, setAffirmation] = useState({
    fecha: 20241117, // Fecha de ejemplo
    idAfirmacion: 1,
    mensaje: "Your journey of a thousand miles begins with a single step. - Lao Tzu",
  });

  // Simulación de carga de datos (puedes reemplazarla por una llamada a API)
  useEffect(() => {
    const fetchAffirmation = () => {
      // Simulación de una nueva afirmación
      const newAffirmation = {
        fecha: 20241118,
        idAfirmacion: 2,
        mensaje: "Believe you can and you're halfway there. - Theodore Roosevelt",
      };
      setAffirmation(newAffirmation);
    };

    fetchAffirmation();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://via.placeholder.com/80" // Cambia este link al logo que quieras usar
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>brand.ai</h1>
        <p style={styles.quote}>{affirmation.mensaje}</p>
        <button style={styles.button}>Get Started</button>
        <p style={styles.signIn}>
          Already have an account? <a href="#signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  card: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  logo: {
    width: "80px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  quote: {
    fontStyle: "italic",
    marginBottom: "20px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#6c63ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px",
  },
  signIn: {
    fontSize: "14px",
    color: "#555",
  },
};

export default AfirmacionesDiarias;
