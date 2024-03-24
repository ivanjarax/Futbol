import App from "../Noticias/noticias";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CalendarioScreen() {
    const [partidos, setPartidos] = useState([]);
  
    useEffect(() => {
      fetch('https://api.football-data.org/v2/competitions/2002/matches')
        .then((response) => response.json())
        .then((data) => setPartidos(data.matches));
    }, []);
  
    return (
      <div>
        <h1>Calendario</h1>
        <ul>
          {partidos.map((partido) => (
            <li key={partido.id}>
              {partido.homeTeam.name} vs {partido.awayTeam.name}
              <p><Link to={`/partido/${partido.id}`}>Ver detalles</Link></p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default CalendarioScreen;
