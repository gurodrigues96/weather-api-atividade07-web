import React from 'react';

function WeatherResult({ weather }) {
  return (
    <div id="resultado">
      <p><strong>Local:</strong> {weather.location.name}, {weather.location.region} - {weather.location.country}</p>
      <p><strong>Temperatura:</strong> {weather.current.temp_c}°C</p>
      <p><strong>Condição:</strong> {weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="Ícone do tempo" />
    </div>
  );
}

export default WeatherResult;