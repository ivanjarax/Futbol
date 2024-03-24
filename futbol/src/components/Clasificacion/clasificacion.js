
import React, { useState, useEffect } from 'react';

function TablaScreen() {
    const [tabla, setTabla] = useState([]);
  
    useEffect(() => {
      fetch('https://api.football-data.org/v2/competitions/2002/standings')
        .then((response) => response.json())
        .then((data) => setTabla(data.standings.table));
    }, []);
  
    return (
      <div>
        <h1>Tabla de clasificación</h1>
        <table>
          <thead>
            <tr>
              <th>Posición</th>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((equipo) => (
              <tr key={equipo.position}>
                <td>{equipo.position}</td>
                <td>{equipo.team.name}</td>
                <td>{equipo.points}</td>
                <td>{equipo.playedGames}</td>
                <td>{equipo.won}</td>
                <td>{equipo.draw}</td>
                <td>{equipo.lost}</td>
                <td>{equipo.goalsFor}</td>
                <td>{equipo.goalsAgainst}</td>
                <td>{equipo.goalDifference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default TablaScreen;
