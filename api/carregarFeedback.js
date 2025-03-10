// api/carregarFeedbacks.js
export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        // Aqui você pode buscar os feedbacks de um banco de dados (Firestore, MongoDB, etc.)
        // Exemplo fictício:
        const feedbacks = [
          { nome: "João", mensagem: "Ótimo app!", data: "2023-10-01" },
          { nome: "Maria", mensagem: "Adorei a interface.", data: "2023-10-02" },
        ];
  
        res.status(200).json(feedbacks);
      } catch (erro) {
        res.status(500).json({ error: "Erro ao carregar feedbacks." });
      }
    } else {
      res.status(405).json({ error: "Método não permitido." });
    }
  }