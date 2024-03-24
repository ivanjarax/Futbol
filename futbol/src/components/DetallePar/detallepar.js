import React, { useState, useEffect } from 'react';

function PartidoScreen({ match }) {
    const [partido, setPartido] = useState([]);
  
    useEffect(() => {
      fetch(`https://api.football-data.org/v2/matches/${match.params.id}`)
        .then((response) => response.json())
        .then((data) => setPartido(data.match));
    }, []);
  
    return (
      <div>
        <h1>{partido.homeTeam.name} vs {partido.awayTeam.name}</h1>
        <p>Marcador: {partido.score.fullTime.homeTeam} - {partido.score.fullTime.awayTeam}</p>
        <p>Alineaciones:</p>
        <ul>
          <li>Local: {partido.homeTeam.lineups.startingLineups.map((jugador) => jugador.name).join(', ')}</li>
          <li>Visitante: {partido.awayTeam.lineups.startingLineups.map((jugador) => jugador.name).join(', ')}</li>
        </ul>
        <p><Link to="/calendario">Volver al calendario</Link></p>
      </div>
    );
  }
  export default PartidoScreen;
