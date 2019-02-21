import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Root from './components/Root';
import Inicio from './components/Inicio';
import Departamento from './components/Departamento';
import Provincia from './components/Provincia';
import Distrito from './components/Distrito';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path={'/'} component={Root}>
            <IndexRoute component={Inicio}/>
            <Route path={'inicio'} component={Inicio}/>
            <Route path={'departamento'} component={Departamento}/>
            <Route path={'provincia'} component={Provincia}/>
            <Route path={'distrito'} component={Distrito}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
