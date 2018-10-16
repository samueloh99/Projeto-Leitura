## Iniciando

Esse projeto foi criado com [Create React App](https://github.com/facebookincubator/create-react-app).
O App foi feito em React, utilizando Redux para manipular o estado da aplicação.

## O Projeto

O projeto Leitura é o segundo teste aplicado no Nanodegree de Desenvolvedor React na Udacity.
A aplicação consiste em exibir uma lista de posts, os quais podem ser votados para ganhar posição, ver os detalhes, editar
e remover os posts. Cada post pode ter comentários com votos, podendo ser editado e removido também.

## Tecnologias utilizadas

Para realizar as requisições para a API disponibilizada pela Udacity, é feito o uso do Axios.
Quanto ao design, Vue-material está sendo utilizado.

## Como iniciar a aplicação

Para iniciar o ambiente de desenvolvimento, execute os seguintes comandos:

* instale todas as dependências da aplicação com `npm install`
* inicie o ambiente com `npm start`

## Iniciando o servidor

Para a aplicação funcionar normalmente, será necessário clonar o repositório em que se encontra o servidor utilizado
para obter e persistir as informações da aplicação. Para isso, rode os comandos abaixo:

```sh
$ git clone git@github.com:udacity/reactnd-project-readable-starter.git
$ cd reactnd-project-readable-starter/api-server
$ npm install
$ node server
```

## Estrutura do projeto
```bash
├── package.json # arquivo de gerenciamento de pacotes npm.
├── README.md - This file.
├── public
│   ├── favicon.ico # ícone do React.
│   ├── index.html # Arquivo onde se encontra o nó root para início da aplicação.
│   └── manifest.json # Todas as configurações para um PWA.
└── src
    ├── components # Pasta de componentes utilizados pela aplicação.
    │   ├── Comment.js
    │   ├── ListComments.js
    │   ├── ListPosts.js
    │   ├── Post.js
    │   ├── Rate.js
    │   ├── RegisterComment.js
    │   └── RegisterDialog.js
    ├── pages # Pasta de componentes que englobam os demais, ou seja, páginas.
    │   ├── Categories.js
    │   ├── Page404.js
    │   ├── PostDetails.js
    │   └── Posts.js
    ├── actions # Pasta contendo todas as actions utilizadas para o Redux.
    │   ├── categories
    │   │   ├── actionTypes.js
    │   │   └── index.js
    │   ├── comments
    │   │   ├── actionTypes.js
    │   │   └── index.js
    │   ├── posts
    │   │   ├── actionTypes.js
    │   │   └── index.js
    │   └── snack
    │       ├── actionTypes.js
    │       └── index.js
    │    
    ├── reducers # Pasta com todos os reducers utilizados pelo Redux.
    │   ├── categories.js
    │   ├── commentsReducer.js
    │   ├── postsReducer.js
    │   ├── root.js
    │   └── snackReducer.js
    ├── services # Pasta contendo o service para fazer requisições para a API.
    │   └── Api.js
    ├── App.css # Estilos específicos da aplicação.
    ├── App.js # Arquivo root da aplicação.
    ├── App.test.js # Arquivo de teste do App.
    ├── App.js # Arquivo root da aplicação.
    ├── index.css # Estilos globais.
    ├── registerServiceWorker.js # Registrando o service Worker para PWA.
    └── index.js # Utilizado para renderização.
```

