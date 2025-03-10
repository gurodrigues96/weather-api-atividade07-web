import React from 'react';

function FeedbackList({ feedbacks }) {
  return (
    <div id="feedback-container">
      <h2>Feedbacks dos Usuários</h2>
      <ul id="lista-feedbacks">
        {feedbacks.map((fb, index) => (
          <li key={index}>
            <strong>{fb.nome}:</strong> {fb.mensagem} <em>({new Date(fb.data).toLocaleDateString()})</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;