# Weather App - WeatherAPI - Atividade 07 API REST - Gustavo Rodrigues

## Descrição e Objetivo do Projeto
Este projeto é uma aplicação web que permite aos usuários consultar informações meteorológicas em tempo real e previsões para os próximos dias, utilizando a [Weather API](https://www.weatherapi.com/). Além disso, a aplicação inclui funcionalidades como:

- **Consulta de clima:** Obtenha informações sobre temperatura, condições climáticas e umidade para qualquer cidade.
- **Previsão para os próximos dias:** Veja a previsão do tempo para os próximos 3 dias.
- **Histórico de pesquisas:** Armazene e visualize as cidades pesquisadas anteriormente.
- **Cidades favoritas:** Marque cidades como favoritas para acesso rápido.
- **Feedback dos usuários:** Envie e visualize feedbacks de outros usuários.

O objetivo deste projeto é demonstrar a integração de uma API pública (Weather API) em uma aplicação React, além de explorar funcionalidades como armazenamento local (`localStorage`) e integração com um backend local usando JSON Server para persistência de dados.

---


## Tecnologias Utilizadas

### Linguagens
- JavaScript (React)
- HTML
- CSS

### Ferramentas e Bibliotecas
- **React** (Framework frontend)
- **JSON Server** (Backend local para armazenar feedbacks)
- **Weather API** (API pública para dados meteorológicos)
- **Vercel** (Hospedagem do frontend)
- **Render/Heroku** (Hospedagem do backend)

---

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 16 ou superior)
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

3. **Configure o JSON Server (Backend local):**
   - Crie um arquivo `db.json` na raiz do projeto com o seguinte conteúdo:
   ```json
   {
     "feedbacks": []
   }
   ```

4. **Inicie o JSON Server:**
   ```sh
   json-server --watch db.json --port 3001
   ```

5. **Inicie o servidor de desenvolvimento do React:**
   ```sh
   npm start
   ```

6. **Acesse a aplicação no navegador:**
   - [http://localhost:3000](http://localhost:3000)

---

## Funcionalidades

### Consulta de Clima
- Digite o nome de uma cidade no campo de busca e clique em "Buscar" para obter informações meteorológicas em tempo real.

### Previsão para os Próximos Dias
- Após buscar uma cidade, a previsão do tempo para os próximos 3 dias será exibida.

### Histórico de Pesquisas
- As cidades pesquisadas são armazenadas localmente e podem ser visualizadas na seção "Histórico de Pesquisas".

### Cidades Favoritas
- Clique em "⭐ Favoritar" para adicionar uma cidade à lista de favoritos. As cidades favoritas são armazenadas localmente.

### Feedback dos Usuários
- Envie feedbacks na seção "Envie seu Feedback". Os feedbacks são armazenados no JSON Server e podem ser visualizados na seção "Feedbacks dos Usuários".

---

## Créditos
- **[Weather API](https://www.weatherapi.com/)**
- **[JSON Server](https://github.com/typicode/json-server)**
- **[React Documentation](https://react.dev/)**
- **[Vercel](https://vercel.com/)**
- **[Render](https://render.com/)**
- **[Heroku](https://www.heroku.com/)**

---

## Licença
Este projeto está licenciado sob a **MIT License**. Consulte o arquivo `LICENSE` para mais detalhes.

---

## Contato
- **Nome:** Gustavo Rodrigues de Oliveira
- **E-mail:** [gustavoro2001@gmail.com](mailto:gustavoro2001@gmail.com)
- **GitHub:** [gurodrigues96](https://github.com/gurodrigues96)

---

## Observações
- Caso o JSON Server não esteja em execução, os feedbacks não serão armazenados ou carregados.
- Para usar um backend em produção, substitua o JSON Server por um serviço como Firebase, Render ou Heroku.

