# Prueba-1 - Pruebas-de-software



## Table of Contents

- [Authors](#authors)
- [About](#about)
- [Getting Started](#getting_started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
- [Usage](#usage)
- [Petitions or URLS](#petitions)
- [Environment Variables](#env)
- [API](#api)
  - [Description](#description)
  - [Structure](#structure)
  - [Endpoints](#endpoints)

## Authors <a name = "authors"></a>

- Elian Bustamante: [@ElianBustamante](https://github.com/ElianBustamante) | e.bustamante02@ufromail.cl
- Daniel Marillanca [@DanielM0802](https://github.com/DanielM0802) | d.marillanca01@ufromail.cl

## About <a name = "about"></a>

This project its about a software that recomends games to the user based on some questions. This software uses Javascript as the main language, and Express as the framework for the backend.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites <a name = "prerequisites"></a>

First, clone the repository.

```
git clone https://github.com/ElianBustamante/Taller2-icc713-2-2023.git
```
Make sure to be in master branch.


```
git checkout master
```

### Installing <a name = "installing"></a>

To install the dependencies, run the following command.

```
npm install
```

## Usage <a name = "usage"></a>

To run the project, run the following command.

```
npm run dev
```
Once the project is running, you should see the following message in the console.

```
Servidor Express escuchando en el puerto 3000
```

## Petitions or URLS <a name ="petitions"></a>

Now, you can go to your browser or use Postman, and type the following urls or petitions.

**a. Recommend two random games for a given console (PS2, GBA, N64).**

Method: GET
```
http://localhost:3000/api/consoles/[insert console abreviation here]/random_games
```

**b. Recommend three random games for a given genre.**

METHOD: POST
```
http://localhost:3000/api/genres/random_games
```
Body example:
```
{
  "genre_name": "Adventure"
}
```

**c. Recommend one random game for a given console and genre.**

METHOD: POST
```
http://localhost:3000/api/consoles/[insert console abreviation here]/genre/random_game
```
Body example:
```
{
  "genre_name": "Adventure"
}
```

**d. Find a game by its name.**

METHOD: GET
```
http://localhost:3000/api/game?name=[insert game name here]
```

## Environment Variables <a name = "env"></a>

This project uses the following environment variables.

PORT: Port where the server will run. By default, it is 3000.

## API <a name = "api"></a>

### Description <a name = "description"></a>
This project uses an API to get the data from the games. Using the API, we can get the games by console, genre, name, etc. The API uses the framework Express to create the server and the routes. Next, the description of the endpoints.

### Structure <a name = "structure"></a>
The structure of this project with this API is the following:

**- configs:** This folder contains the configuration of the API, like the port, the routes, etc.

**- controllers:** This folder contains the controllers of the API, like the functions that are executed when a petition is made. Connects the routes with the services.

**- routes:** This folder contains the routes of the API.

**- services:** This folder contains the services of the API, like the functions that are executed when a petition is made. Here is the logic of the API.

**- utils:** This folder contains the utils of the API. Methods that should not be in the controllers or services.

### Endpoints <a name = "endpoints"></a>

- **`/api/consoles/$console_abreviation/random_games`**: This endpoint returns two random games for a given console using GET method. The console abreviations are: PS2, GBA, N64.

- **`/api/genres/random_games`**: This endpoint returns three random games for a given genre using POST method.

- **`/api/consoles/$console_abreviation/genre/random_game`**: This endpoint returns one random game for a given console and genre using POST method.

- **`/api/game?name=$game_name`**: This endpoint returns a game by its name using GET method.