import React, { useState } from "react";

const RegistroEmocion = () => {
  // Estados para los campos
  const [emocion, setEmocion] = useState("");
  const [destacado, setDestacado] = useState("");
  const [energia, setEnergia] = useState(50);
  const [autocuidado, setAutocuidado] = useState([]);

  const opcionesAutocuidado = ["Meditación", "Ejercicio", "Lectura"];

  const guardarRespuestas = () => {
    const datos = { emocion, destacado, energia, autocuidado };
    console.log("Datos guardados:", datos);
    alert("Respuestas guardadas exitosamente");
  };

  return (
    <div style={styles.contenedor}>
      {/* Selección de emoción */}
      <div style={styles.seccion}>
        <h3>¿Cómo te sientes hoy?</h3>
        <div style={styles.botones}>
          {["Feliz", "Triste", "Enojado", "Ansioso"].map((emocionTexto) => (
            <button
              key={emocionTexto}
              onClick={() => setEmocion(emocionTexto)}
              style={{
                ...styles.boton,
                backgroundColor: emocion === emocionTexto ? "#d0f0fd" : "#fff",
              }}
            >
              {emocionTexto}
            </button>
          ))}
        </div>
      </div>

      {/* Campo para texto destacado */}
      <div style={styles.seccion}>
        <h3>¿Qué ha sido lo más destacado de tu día?</h3>
        <textarea
          value={destacado}
          onChange={(e) => setDestacado(e.target.value)}
          placeholder="Escribe aquí..."
          style={styles.textarea}
        />
      </div>

      {/* Control deslizante para nivel de energía */}
      <div style={styles.seccion}>
        <h3>¿Cuál es tu nivel de energía?</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={energia}
          onChange={(e) => setEnergia(Number(e.target.value))}
          style={styles.range}
        />
        <p>Nivel de energía: {energia}</p>
      </div>

      {/* Selección de actividades de autocuidado */}
      <div style={styles.seccion}>
        <h3>¿Has practicado alguna actividad de autocuidado hoy?</h3>
        <div style={styles.botones}>
          {opcionesAutocuidado.map((actividad) => (
            <button
              key={actividad}
              onClick={() =>
                setAutocuidado((prev) =>
                  prev.includes(actividad)
                    ? prev.filter((item) => item !== actividad)
                    : [...prev, actividad]
                )
              }
              style={{
                ...styles.boton,
                backgroundColor: autocuidado.includes(actividad)
                  ? "#d0f0fd"
                  : "#fff",
              }}
            >
              {actividad}
            </button>
          ))}
        </div>
      </div>

      {/* Botón para guardar respuestas */}
      <button onClick={guardarRespuestas} style={styles.guardar}>
        Guardar Respuestas
      </button>
    </div>
  );
};

// Estilos en línea
const styles = {
  contenedor: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  seccion: {
    marginBottom: "20px",
  },
  botones: {
    display: "flex",
    justifyContent: "space-between",
  },
  boton: {
    padding: "10px 15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  range: {
    width: "100%",
  },
  guardar: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default RegistroEmocion;
