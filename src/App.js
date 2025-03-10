import React, { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';
import Forecast from './components/Forecast';
import History from './components/History';
import Favorites from './components/Favorites';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

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

    const feedback = { nome, mensagem, data: new Date().toISOString() };

    try {
      const resposta = await fetch("http://localhost:3000/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      });

      if (resposta.ok) {
        alert("Feedback enviado com sucesso!");
        carregarFeedbacks(); // Recarrega a lista de feedbacks após o envio
      } else {
        alert("Erro ao enviar feedback.");
      }
    } catch (erro) {
      alert("Erro ao conectar ao servidor.");
    }
  };

  const carregarFeedbacks = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/feedbacks");
      if (!resposta.ok) {
        throw new Error("Erro ao carregar feedbacks.");
      }
      const feedbacks = await resposta.json();
      setFeedbacks(feedbacks);
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

export default App;