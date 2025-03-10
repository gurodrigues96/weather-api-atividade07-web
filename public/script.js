const API_KEY = 'c9e235a23b644fd3b0d144321250303';
const BASE_URL = 'https://api.weatherapi.com/v1';

async function buscarClima() {
    const cidade = document.getElementById("cidade").value;
    if (!cidade) {
        alert("Por favor, digite o nome da cidade!");
        return;
    }

    const urlAtual = `${BASE_URL}/current.json?key=${API_KEY}&q=${cidade}&lang=pt`;
    const urlPrevisao = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${cidade}&days=3&lang=pt`;

    try {
        const respostaAtual = await fetch(urlAtual);
        const respostaPrevisao = await fetch(urlPrevisao);
        const dadosAtual = await respostaAtual.json();
        const dadosPrevisao = await respostaPrevisao.json();

        if (respostaAtual.ok && respostaPrevisao.ok) {
            document.getElementById("resultado").innerHTML = `
                <p><strong>Local:</strong> ${dadosAtual.location.name}, ${dadosAtual.location.region} - ${dadosAtual.location.country}</p>
                <p><strong>Temperatura:</strong> ${dadosAtual.current.temp_c}°C</p>
                <p><strong>Condição:</strong> ${dadosAtual.current.condition.text}</p>
                <img src="${dadosAtual.current.condition.icon}" alt="Ícone do tempo">
            `;

            let previsaoHTML = "";
            dadosPrevisao.forecast.forecastday.forEach(dia => {
                previsaoHTML += `
                    <p><strong>${dia.date}</strong></p>
                    <p>Máx: ${dia.day.maxtemp_c}°C | Mín: ${dia.day.mintemp_c}°C</p>
                    <p>${dia.day.condition.text}</p>
                    <img src="${dia.day.condition.icon}" alt="Ícone do tempo">
                    <hr>
                `;
            });
            document.getElementById("previsao").innerHTML = previsaoHTML;

            salvarHistorico(cidade);
        } else {
            document.getElementById("resultado").innerHTML = `<p>Erro: ${dadosAtual.error.message}</p>`;
        }
    } catch (erro) {
        document.getElementById("resultado").innerHTML = `<p>Ocorreu um erro ao buscar os dados.</p>`;
    }
}

function salvarHistorico(cidade) {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    if (!historico.includes(cidade)) {
        historico.push(cidade);
        localStorage.setItem("historico", JSON.stringify(historico));
        atualizarHistorico();
    }
}

function atualizarHistorico() {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    let historicoHTML = "";
    historico.forEach(cidade => {
        historicoHTML += `<li>${cidade}</li>`;
    });
    document.getElementById("historico").innerHTML = historicoHTML;
}

function salvarFavorito() {
    const cidade = document.getElementById("cidade").value;
    if (!cidade) {
        alert("Digite o nome da cidade antes de favoritar!");
        return;
    }

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favoritos.includes(cidade)) {
        favoritos.push(cidade);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        atualizarFavoritos();
    }
}

function atualizarFavoritos() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    let favoritosHTML = "";
    favoritos.forEach(cidade => {
        favoritosHTML += `<li>${cidade}</li>`;
    });
    document.getElementById("favoritos").innerHTML = favoritosHTML;
}

window.onload = () => {
    atualizarHistorico();
    atualizarFavoritos();
};
async function enviarFeedback() {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    const feedback = { nome, mensagem, data: new Date().toISOString() };

    try {
        const resposta = await fetch("http://localhost:3000/feedbacks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(feedback)
        });

        if (resposta.ok) {
            document.getElementById("status").innerText = "Feedback enviado com sucesso!";
            document.getElementById("nome").value = "";
            document.getElementById("mensagem").value = "";
        } else {
            document.getElementById("status").innerText = "Erro ao enviar feedback.";
        }
    } catch (erro) {
        document.getElementById("status").innerText = "Erro ao conectar ao servidor.";
    }
};

async function carregarFeedbacks() {
    try {
        const resposta = await fetch("http://localhost:3000/feedbacks");
        const feedbacks = await resposta.json();

        let listaHTML = "";
        feedbacks.forEach(fb => {
            listaHTML += `<li><strong>${fb.nome}:</strong> ${fb.mensagem} <em>(${new Date(fb.data).toLocaleDateString()})</em></li>`;
        });

        document.getElementById("lista-feedbacks").innerHTML = listaHTML;
    } catch (erro) {
        document.getElementById("lista-feedbacks").innerHTML = "<li>Erro ao carregar feedbacks.</li>";
    }
}

window.onload = () => {
    carregarFeedbacks();
    atualizarHistorico();
    atualizarFavoritos();
};

const API_FEEDBACK = window.location.hostname === "localhost" 
    ? "http://localhost:3000/feedbacks"
    : "https://json-server-feedbacks.onrender.com";


