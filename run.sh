# criar componenete 

import React, {Component} from 'react';
import Header from './Components/Header'

class App extends Component {
  render() {
    return 'teste'
  }
}

export default App;


# criar componenete com funcao 

import React, {Component} from 'react';
import Header from './Components/Header'

const App = () => (
  <div>
      <Header />
  </div>
)

export default App;


# consumir api com request 

yarn add axios


# criar servico


import axios from "axios";

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api'});

export default api;


# variaveis  


state = {
    nomeVariavel : [],
        nomeVariavel : {},
            nomeVariavel : 'tetqsdaf',
                nomeVariavel : 5,

}


# criar rotas

import React from 'react';

import {BrowserRouter, Switch, Router} from 'react-router-dom' 

import Main from './pages/main'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Router path="/"  component={Main} />
        </Switch>
    </BrowserRouter>
)

