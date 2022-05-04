<h1 align="center">
    <img height="80" src="https://img.icons8.com/material-rounded/96/000000/api-settings.png" />
    <p>API Node-lista-tarefa</p>
</h1>

## 🚨 About

**Node-lista-tarefa** It is a user task list API, where using the cell phone's macaddress you register the day-to-day tasks and only you have access to your tasks. 


## 🔨 Tools

- [NodeJs](https://nodejs.org/en/)
- [JavaScript]()
- [MongoDB](https://www.mongodb.com/try/download/community)

## Libraries/Frameworks

- [Express](https://expressjs.com/)

### Requisitos

Have installed at least one Node package manager, [Npm](https://nodejs.org/en/) or [Yarn](https://yarnpkg.com/).


## 👍 Use

```bash
    # Install NodeJs
    - Link: https://nodejs.org/en/ 
```

```bash
    # Clone the project
    $ git clone https://github.com/gabrielteixeira-0814/Node-lista-tarefa.git  
```

```bash
    # Enter directory
    $ cd  Node-lista-tarefa
```

```bash
    # Install dependencies
    $ `npm install` or `yarn install`
```

```bash
    # Download MongoDB database for api connection
    - Link: https://www.mongodb.com/try/download/community
```

```bash
    # To start the server at address: http://localhost:3333/task
    $ yarn start
```

### Application Routes

- **`POST /task`**: Rota para cadastrar uma nova tarefa.

- **`GET /task/filter/all/{macaddress}`**: Route to list all your registered tasks according to their macaddress.

- **`PUT /task/:id`**: Route to delete a task.

- **`DELETE /task/:id`**: Route to delete a task.
