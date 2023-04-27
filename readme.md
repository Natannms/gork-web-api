# Projeto Gork - Backend e Frontend

O projeto Gork consiste em uma aplicação de chat em tempo real, utilizando WebSocket para comunicação entre o backend e o frontend. O backend foi desenvolvido em Node.js, utilizando o framework Express, Sequelize como ORM para banco de dados e WebSocket para comunicação em tempo real. Já o frontend foi desenvolvido em React.

## Backend

O código fonte do backend da aplicação está disponível no repositório GitHub [Natannms/gork-web-api](https://github.com/Natannms/gork-web-api). Para executar a aplicação, siga os seguintes passos:

1. Clone o repositório:

   ```
   git clone https://github.com/Natannms/gork-web-api.git
   ```

2. Instale as dependências do projeto:

   ```
   cd gork-web-api
   npm install
   ```

3. Execute a aplicação:

   ```
   npm start
   ```

   A aplicação estará disponível na porta 3001. É possível alterar a porta editando o arquivo `server.js` no diretório `src`.

## Frontend

O código fonte do frontend da aplicação está disponível no repositório GitHub [Natannms/gork-web-chat](https://github.com/Natannms/gork-web-chat). Para executar a aplicação, siga os seguintes passos:

1. Clone o repositório:

   ```
   git clone https://github.com/Natannms/gork-web-chat.git
   ```

2. Instale as dependências do projeto:

   ```
   cd gork-web-chat
   npm install
   ```

3. Execute a aplicação:

   ```
   npm start
   ```

   A aplicação estará disponível em http://localhost:3000. É possível alterar a porta editando o arquivo `Requests.js` e `App.jsx`.

## Considerações Finais

Com essas instruções, será possível executar tanto o backend quanto o frontend da aplicação Gork. Esperamos que o projeto seja útil e ajude na compreensão de como construir uma aplicação em tempo real utilizando Node.js, React e WebSocket.
