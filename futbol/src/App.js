import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/Inicio/inicio';
import CalendarioScreen from './components/Calendario/calendario';
import PartidoScreen from './components/DetallePar/detallepar';
import TablaScreen from './components/Clasificacion/clasificacion';
import Noticias from './components/Noticias/noticias';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/calendario" component={CalendarioScreen} />
          <Route path="/DetallePar/:id" component={PartidoScreen} />
          <Route path="/Clasificacion" component={TablaScreen} />
          <Route path="/Noticias" component={Noticias} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
