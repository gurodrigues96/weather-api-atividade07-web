export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { nome, mensagem } = req.body;
  
      // Aqui você pode salvar o feedback em um banco de dados (Firestore, MongoDB, etc.)
      // Exemplo fictício:
      console.log('Feedback recebido:', { nome, mensagem });
  
      res.status(200).json({ success: true });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  }