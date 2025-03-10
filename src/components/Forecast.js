import React from 'react';

function Forecast({ forecast }) {
  return (
    <div id="previsao">
      <h2>Previsão para os próximos dias</h2>
      {forecast.forecast.forecastday.map((dia, index) => (
        <div key={index}>
          <p><strong>{dia.date}</strong></p>
          <p>Máx: {dia.day.maxtemp_c}°C | Mín: {dia.day.mintemp_c}°C</p>
          <p>{dia.day.condition.text}</p>
          <img src={dia.day.condition.icon} alt="Ícone do tempo" />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Forecast;