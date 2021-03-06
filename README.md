# :boom: Desafio Concluído

Projeto desafio Serasa para elaboração de software para calculo de score de empresas baseado em upload de dados via arquivo. O projeto usa algumas das tecnologias mais usadas no mercado como [Node.js](https://nodejs.org/en/) e [React JS](https://pt-br.reactjs.org/)

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)

### Navegadores homologados (últimas versões)

- Google Chrome
- Mozilla Firefox
- Edge Chromium

## Instalação

Para instalar o projeto, após clonar o projeto, navegue até a pasta `server` e execute os seguintes comandos:

```bash
npm install
npm run migrate
npm run seed
npm start
```
Após isso, entre na pasta `client` e instale as dependencias usando o comando:

```bash
npm install
npm start
```

## Teste

Para excutar os testes, dentro da pasta `server` executar o comando:
```bash
npm test
```
No console da IDE serão exibidos os logs dos teste.

## Uso

Após executar os passos de instalação, a interface poderá ser acessada na porta [http://localhost:3000/](http://localhost:3000/)


### Arquivo para upload
Na pasta raíz do projeto, se encontra um arquivo `dados_financeiros.csv` como exemplo de template para upload.
O arquivo começa com um cabeçalho com duas colunas `id` e `tipo`, cada linha após essas devem conter o id do dado financeiro como valor numérico e o tipo `Nota Fiscal` ou `Débito`, como exemplo a seguir:

    id,tipo
    1,Nota Fiscal
    2,Débito
    3,Débito
    4,Nota Fiscal

## Documentação da API
Após instalar e rodar o projeto, a documentação da API estará disponível em [http://localhost:3333/apidoc](http://localhost:3333/apidoc)