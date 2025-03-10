import React from 'react';

function Favorites({ favorites }) {
  return (
    <div>
      <h2>Cidades Favoritas</h2>
      <ul id="favoritos">
        {favorites.map((cidade, index) => (
          <li key={index}>{cidade}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;