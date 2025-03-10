import React, { useState } from 'react';

function FeedbackForm({ enviarFeedback }) {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviarFeedback = () => {
    enviarFeedback(nome, mensagem);
    setNome(''); // Limpa o campo nome após o envio
    setMensagem(''); // Limpa o campo mensagem após o envio
  };

  return (
    <div>
      <h2>Envie seu Feedback</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu Nome"
      />
      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Digite seu feedback"
      />
      <button onClick={handleEnviarFeedback}>Enviar</button>
    </div>
  );
}

export default FeedbackForm;