import React, { useState } from 'react';

function WeatherForm({ buscarClima, salvarFavorito }) {
  const [cidade, setCidade] = useState('');

  const handleBuscarClima = () => {
    buscarClima(cidade); // Chama a função buscarClima passada via props
  };

  const handleSalvarFavorito = () => {
    salvarFavorito(cidade); // Chama a função salvarFavorito passada via props
  };

  return (
    <div>
      <input
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Digite o nome da cidade"
      />
      <button onClick={handleBuscarClima}>Buscar</button>
      <button onClick={handleSalvarFavorito}>⭐ Favoritar</button>
    </div>
  );
}

export default WeatherForm;