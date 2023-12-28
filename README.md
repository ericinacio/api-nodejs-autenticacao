# API NODE.JS DE AUTENTICAÇÃO
> Esta é uma pequena API de autenticação desenvolvida por mim, seguindo o curso ministrado por [Matheus Battisti](https://github.com/matheusbattisti). Realizei algumas melhorias, implementando o uso de Módulos ES e melhorando a forma como e feito as rotas, controllers e a conexão com MongoDB.

## Tecnologias Utilizadas
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/pt-br/)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community)
* [Mongoose.js](https://mongoosejs.com/)
* [Cors](https://www.npmjs.com/package/cors)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [JSON Web Tokens](https://jwt.io/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Nodemon](https://nodemon.io/)

## Requisitos
* Visual Studio Code **(Instale pelo [site oficial](https://code.visualstudio.com/))**
* Node.js **(Instale pelo [site oficial](https://nodejs.org/en))**
* Nodemon **(Instale pelo [site oficial](https://nodemon.io/))**
* MongoDB Community Server **(Instale pelo [site oficial](https://www.mongodb.com/try/download/community))**
* Extensão Thunder Client **(Instale pelo [link](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client))**

## Como Instalar
1. Certifique que tenha todos os requisitos
2. Instale as dependências pelo terminal utilizando o comando: **`npm install`**
3. Crie uma arquivo **.env** na raiz do projeto
4. Adicione essa linha no arquivo .env: **`DB_CONFIG='mongodb://localhost:27017'`**
5. Abaixo dessa linha adicione essa variável, com um token dessa forma: **`SECRET='crie-um-token-e-coloque-aqui'`**
6. Inicie o projeto pelo terminal usando o comando **`npm start`**
7. Execute um request pelo Thunder Client, eles estão no arquivo **`REQUEST.md`**
8. Se quiser ver os dados salvos no MongoDB mais facilmente, pode fazer isso através do [MongoDB Compass](https://www.mongodb.com/try/download/compass)
