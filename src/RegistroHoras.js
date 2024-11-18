import React, { useState } from "react";
import "./RegistroHoras.css";

const RegistroHoras = () => {
  const [horas, setHoras] = useState("");
  const [calidad, setCalidad] = useState(50);
  const [horaAcostarse, setHoraAcostarse] = useState("");
  const [estadoDespertar, setEstadoDespertar] = useState("");

  const handleEstadoChange = (estado) => {
    setEstadoDespertar(estado);
  };

  return (
    <div className="registro-horas">
      <h1>Registro de Sueño</h1>
      <div className="card">
        <div className="input-group">
          <label>¿Cuántas horas dormiste anoche?</label>
          <input
            type="number"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
            placeholder="Ingresa las horas de sueño"
          />
        </div>
        <div className="input-group">
          <label>Calidad del sueño</label>
          <input
            type="range"
            min="0"
            max="100"
            value={calidad}
            onChange={(e) => setCalidad(parseInt(e.target.value))}
          />
          <span>{calidad <= 50 ? "Mala" : "Excelente"}</span>
        </div>
        <div className="input-group">
          <label>¿A qué hora te acostaste?</label>
          <input
            type="time"
            value={horaAcostarse}
            onChange={(e) => setHoraAcostarse(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>¿Cómo te sientes al despertar?</label>
          <div className="estado-options">
            {["Descansado", "Cansado", "Energético", "Somnoliento"].map((estado) => (
              <button
                key={estado}
                className={estadoDespertar === estado ? "selected" : ""}
                onClick={() => handleEstadoChange(estado)}
              >
                {estado}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroHoras;
