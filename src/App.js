import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './paginas/Home.jsx';
import Login from './paginas/Login.jsx';
import ListaDeClientes from './paginas/ListaDeClientes.jsx';
import CadastroDeClientes from './paginas/CadastroDeClientes.jsx';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/cadastroDeClientes' component={CadastroDeClientes} />
          <Route path='/listaDeClientes' component={ListaDeClientes} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
