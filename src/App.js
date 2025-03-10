import React, { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';
import Forecast from './components/Forecast';
import History from './components/History';
import Favorites from './components/Favorites';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';


const API_KEY = 'c9e235a23b644fd3b0d144321250303';
const BASE_URL = 'https://api.weatherapi.com/v1';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("historico")) || [];
    const savedFavorites = JSON.parse(localStorage.getItem("favoritos")) || [];
    setHistory(savedHistory);
    setFavorites(savedFavorites);
    carregarFeedbacks();
  }, []);

  const buscarClima = async (cidade) => {
    if (!cidade) {
      alert("Por favor, digite o nome da cidade!");
      return;
    }

    const urlAtual = `${BASE_URL}/current.json?key=${API_KEY}&q=${cidade}&lang=pt`;
    const urlPrevisao = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${cidade}&days=3&lang=pt`;

    try {
      const [respostaAtual, respostaPrevisao] = await Promise.all([
        fetch(urlAtual),
        fetch(urlPrevisao),
      ]);

      const dadosAtual = await respostaAtual.json();
      const dadosPrevisao = await respostaPrevisao.json();

      if (respostaAtual.ok && respostaPrevisao.ok) {
        setWeather(dadosAtual);
        setForecast(dadosPrevisao);
        salvarHistorico(cidade);
      } else {
        alert(`Erro: ${dadosAtual.error.message}`);
      }
    } catch (erro) {
      alert("Ocorreu um erro ao buscar os dados.");
    }
  };

  const salvarHistorico = (cidade) => {
    const novoHistorico = [...history, cidade];
    setHistory(novoHistorico);
    localStorage.setItem("historico", JSON.stringify(novoHistorico));
  };

  const salvarFavorito = (cidade) => {
    if (!cidade) {
      alert("Digite o nome da cidade antes de favoritar!");
      return;
    }

    const novosFavoritos = [...favorites, cidade];
    setFavorites(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };

  
  const enviarFeedback = async (nome, mensagem) => {
    if (!nome || !mensagem) {
      alert("Preencha todos os campos!");
      return;
    }
  
    try {
      // Adiciona um novo documento à coleção "feedbacks"
      const docRef = await addDoc(collection(db, 'feedbacks'), {
        nome,
        mensagem,
        data: new Date().toISOString(),
      });
      alert("Feedback enviado com sucesso!");
      carregarFeedbacks(); // Recarrega a lista de feedbacks
    } catch (erro) {
      alert("Erro ao enviar feedback.");
    }
  };

  const carregarFeedbacks = async () => {
    try {
      // Obtém todos os documentos da coleção "feedbacks"
      const querySnapshot = await getDocs(collection(db, 'feedbacks'));
      const feedbacks = [];
      querySnapshot.forEach((doc) => {
        feedbacks.push({ id: doc.id, ...doc.data() });
      });
      setFeedbacks(feedbacks); // Atualiza o estado com os feedbacks carregados
    } catch (erro) {
      alert("Erro ao carregar feedbacks.");
    }
  };

  return (
    <div className="container">
      <h1>Consulta de Clima</h1>
      <WeatherForm buscarClima={buscarClima} salvarFavorito={salvarFavorito} />
      {weather && <WeatherResult weather={weather} />}
      {forecast && <Forecast forecast={forecast} />}
      <History history={history} />
      <Favorites favorites={favorites} />
      <FeedbackForm enviarFeedback={enviarFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

  const testFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'test'));
    console.log("Conexão com o Firestore bem-sucedida!");
  } catch (erro) {
    console.error("Erro ao conectar ao Firestore:", erro);
  }
};

testFirestore();

export default App;
