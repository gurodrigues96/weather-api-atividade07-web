// api/carregarFeedbacks.js
import { db } from '../../src/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(collection(db, 'feedbacks'));
      const feedbacks = [];
      querySnapshot.forEach((doc) => {
        feedbacks.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(feedbacks);
    } catch (erro) {
      res.status(500).json({ error: "Erro ao carregar feedbacks." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}