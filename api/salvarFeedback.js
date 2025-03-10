// api/salvarFeedback.js
import { db } from '../../src/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, mensagem } = req.body;

    try {
      const docRef = await addDoc(collection(db, 'feedbacks'), {
        nome,
        mensagem,
        data: new Date().toISOString(),
      });
      res.status(200).json({ success: true, id: docRef.id });
    } catch (erro) {
      res.status(500).json({ error: "Erro ao salvar feedback." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}