import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Cadastro from './Cadastro';
import Listar from './Listar';
import Menu from './Menu';

import Comentario from './Comentario';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Menu />
  
          <div className="container-fluid">
            <div className="row">
                <div className="col">
                <Switch>
                  <Route exact path="/listar" component={Listar} />
                  <Route path="/cadastro" component={Cadastro} />
                </Switch>
                </div>
            </div>
          </div>
    
  
      </div>
    );
  }
}

export default App;
