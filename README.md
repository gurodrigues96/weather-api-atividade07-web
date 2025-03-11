####Gustavo Rodrigues de Oliveira

Descrição e Objetivo do Projeto
Este projeto é uma aplicação web que permite aos usuários consultar informações meteorológicas em tempo real e previsões para os próximos dias, utilizando a Weather API (https://www.weatherapi.com/). Além disso, a aplicação inclui funcionalidades como:

Consulta de clima: Obtenha informações sobre temperatura, condições climáticas e umidade para qualquer cidade.

Previsão para os próximos dias: Veja a previsão do tempo para os próximos 3 dias.

Histórico de pesquisas: Armazene e visualize as cidades pesquisadas anteriormente.

Cidades favoritas: Marque cidades como favoritas para acesso rápido.

Feedback dos usuários: Envie e visualize feedbacks de outros usuários.

O objetivo deste projeto é demonstrar a integração de uma API pública (Weather API) em uma aplicação React, além de explorar funcionalidades como armazenamento local (localStorage) e integração com um backend local usando JSON Server para persistência de dados.

---

## Tecnologias Utilizadas
### Linguagens:
- JavaScript (React)
- HTML
- CSS

### Ferramentas e Bibliotecas:
- React (Framework frontend)
- Firebase (Banco de dados Firestore para armazenar feedbacks)
- Weather API (API pública para dados meteorológicos)
- Vercel (Hospedagem do frontend)
- Render/Heroku (Hospedagem do backend)

---

## Como Executar o Projeto
### Pré-requisitos
- Node.js instalado (versão 16 ou superior)
- Conta no Firebase (para usar o Firestore)
- Chave de API da Weather API ([Obter chave](https://www.weatherapi.com/))

### Passos para Execução
1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/weather-app.git
   cd weather-app
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure o Firebase:**
   - Crie um projeto no Firebase ([Firebase Console](https://console.firebase.google.com/)).
   - Adicione um aplicativo web e obtenha as credenciais.
   - Crie um arquivo `.env` na raiz do projeto e adicione as credenciais do Firebase:
     ```sh
     REACT_APP_API_KEY=SUA_API_KEY
     REACT_APP_AUTH_DOMAIN=SEU_DOMINIO.firebaseapp.com
     REACT_APP_PROJECT_ID=SEU_PROJECT_ID
     REACT_APP_STORAGE_BUCKET=SEU_STORAGE_BUCKET
     REACT_APP_MESSAGING_SENDER_ID=SEU_SENDER_ID
     REACT_APP_APP_ID=SEU_APP_ID
     ```

4. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm start
   ```

5. **Acesse a aplicação no navegador:**
   [http://localhost:3000](http://localhost:3000)

---

## Créditos
- [Weather API](https://www.weatherapi.com/)
- [Firebase](https://firebase.google.com/)
- [React Documentation](https://reactjs.org/)
- [Vercel](https://vercel.com/)
- [Render](https://render.com/)
- [Heroku](https://www.heroku.com/)

---

## Licença
Este projeto está licenciado sob a **MIT License**. Consulte o arquivo `LICENSE` para mais detalhes.

---

## Contato
- **Nome**: Gustavo Rodrigues de Oliveira
- **E-mail**: gustavoro2001@gmail.com
- **GitHub**: [gurodrigues96](https://github.com/gurodrigues96)

