<h1 align="center"> <img src="https://user-images.githubusercontent.com/65569815/176964539-fe858838-0d07-418e-9220-b6d94461ecee.png" width=1000> </h1>
<h1 align="center"> :department_store: :compass: CompassMart :compass: :department_store: </h1>

<p align="center"> Final part of the final challenge of Compass.uol 's NodeJS Scholarship Program </p>
<p align="center"> Parte final do desafio final do Programa de Bolsas de NodeJS da Compass.uol </p>

## :pencil: Description / Descrição
<p align="left"> Compasso is undertaking in a market branch and aggregated with CompassMart, a department store, focused in food commerce, are requisiting their API's Back-end. </p>
<p align="left"> A Compasso está empreendendo em um ramo de mercado e em conjunto com a CompassMart, uma loja de departamento, com o foco em comércio de alimentos, estão requisitando o Back-end para a sua API. </p>

## :computer: Technologies / Tecnologias
<img src="https://user-images.githubusercontent.com/65569815/182266557-f2d0c589-fe31-4d65-b867-cb40385066a0.svg" width=90> <img src="https://user-images.githubusercontent.com/65569815/182253645-6966537e-18ed-4c47-974b-22510cc3d834.png" width=90> <img src="https://user-images.githubusercontent.com/65569815/187051607-c61423cb-a4c8-480c-9655-ff038a001ed7.jpg" width=90>
<p align="left"> The technologies used for the development of this project were the TypeScript language, NodeJS with Express and Mongoose for the database connection.  </p>
<p align="left"> As tecnologias usadas para o desenvolvimento desse projeto foram a linguagem TypeScript, NodeJS com Express e Mongoose para a conexão com o banco de dados.  </p>

## :factory: Requirements / Requisitos
Before starting you need to install Node.js in your computer, in addition is needed a collection in MongoDB Atlas and you also need to create a `.env` file following the `.env.example` file model
###
Antes de começar você precisa instalar o Node.js no seu computador, além de ser necessário uma collection no MongoDB Atlas e você também precisa criar um arquivo `.env` seguindo o modelo do arquivo `.env.example`

## :runner: How to run / Como rodar
Once all previous requirements are ready you need excute the following commands:
```
# Clone this repository
$ git clone https://github.com/JVMel0o/Desafio-Final-CompassMart.git

# Go to project's folder
$ cd DesafioFinalParte01

# Install the dependencies
$ npm install

# Initiate the aplication in localhost:3000
$ npm run dev
```
Após os requisitos anteriores estiverem prontos você deverá executar os seguintes comandos:
```
# Clonar este repositório
$ git clone https://github.com/JVMel0o/Desafio-Final-CompassMart.git

# Entrar na pasta do projeto
$ cd DesafioFinalParte01

# Instalar as dependências
$ npm install

# Iniciar a aplicação em localhost:3000
$ npm run dev
```
## :alembic: Tests / Testes
After installing and setting up the whole project you may run the following command to see the tests case

Depois de instalar e configurar todo o projeto você pode executar o seguinte comando para ver os casos de testes

```
$ npm test
```

## :fuelpump: Dependencies / Dependências
- bcrypt ^5.0.1
- cors ^2.8.5
- dotenv ^16.0.1
- express ^4.18.1
- joi ^17.6.0
- jsonwebtoken ^8.5.1
- mongoose ^6.5.2
- mongoose-paginate-ts ^1.2.7
- mongoose-paginate-v2 ^1.7.0
- morgan ^1.10.0
- multer ^1.4.5-lts.1
- winstom ^3.8.1

## :fuelpump: Development Dependencies / Dependências de desenvolvimento
- @types/cors ^2.8.12
- @types/express ^4.17.13
- @types/jest ^29.0.2
- @types/mongoose ^5.11.97
- @types/morgan ^1.9.3
- @types/multer ^1.4.7
- @typescript-eslint/eslint-plugin ^5.0.0
- eslint ^8.21.0
- eslint-config-standard-with-typescript ^23.0.0
- eslint-plugin-import ^2.25.2
- eslint-plugin-n ^15.0.0
- eslint-plugin-promise ^6.0.0
- jest ^29.0.3
- nodemon ^2.0.19
- supertest ^6.2.4
- ts-jest ^29.0.1
- ts-node ^10.9.1
- typescript ^4.7.4

## :door: Endpoints
### Products Endpoint / Endpoint de produtos
|Route / Rota|Method / Método|Description / Descrição|
| -------- | -------- | -------- |
|`/api/v1/product`|GET|Find all products / Encontra todos os Produtos|
|`/api/v1/product/low_stock`|GET|Find all with low stock / Encontra produtos com o estoque baixo|
|`/api/v1/product/marketplace/:id`|GET|Find product by ID with marketplace parameters / Encontra um produto por ID com os parâmetros do marketplace|
|`/api/v1/product/:id`|GET|Find product by ID / Encontra um produto por ID|
|`/api/v1/product`|POST|Create product / Cria um produto|
|`/api/v1/product/csv`|POST|Create product with CSV file / Cria produtos com um arquivo CSV|
|`/api/v1/product/:id`|PUT|Update all product values by ID / Atualiza todos os valores do produto por ID|
|`/api/v1/product/:id`|PATCH|Update at least one product value by ID / Atualiza ao menos um valor do produto por ID|
|`/api/v1/product/:id`|DELETE|Delete product by ID / Apaga produto por ID|

### Users Endpoint / Endpoint de usuários
|Route / Rota|Method / Método|Description / Descrição|
| -------- | -------- | -------- |
|`/api/v1/user`|GET|Find all users / Encontra todos os usuários|
|`/api/v1/user`|POST|Create user / Cria um usuário|
|`/api/v1/authenticate`|POST|Recieve a Token / Recebe um Token|
|`/api/v1/user/:email`|DELETE|Delete user by email / Apaga usuário por email|

## :file_folder: Schema / Esquema
### Products Table / Tabela de Produtos
|Field name / Nome do campo|Type / Tipo|Required / Obrigatório|Unique / Único|
| -------- | -------- | -------- | -------- |
|`_id`|ObjectId|true|true|
|`title`|String|true|false|
|`description`|String|true|false|
|`department`|String|true|false|
|`brand`|String|true|false|
|`price`|Number|true|false|
|`qtd_stock`|Number|true|false|
|`stock_control_enabled`|Boolean|false|false|
|`bar_code`|String|true|true|

### Users Table / Tabela de Usuários
|Field name / Nome do campo|Type / Tipo|Required / Obrigatório|Unique / Único|
| -------- | -------- | -------- | -------- |
|`email`|String|true|true|
|`password`|String|true|false|

## Heroku
https://desafio-final-compass-mart.herokuapp.com/

## :speech_balloon: Author / Autor
[<img src="https://avatars2.githubusercontent.com/JVMel0o" width=115 > <br> <sub> João Melo </sub>](https://github.com/JVMel0o) |
| :---: |  
