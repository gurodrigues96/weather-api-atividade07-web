import React from 'react';

function History({ history }) {
  return (
    <div>
      <h2>Histórico de Pesquisas</h2>
      <ul id="historico">
        {history.map((cidade, index) => (
          <li key={index}>{cidade}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;