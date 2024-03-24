import React, { useState, useEffect } from 'react';

function HomeScreen() {
    return (
      <div>
        <h1>Inicio</h1>
        <p>Próximos partidos:</p>
        <ul>
          <li>Partido 1</li>
          <li>Partido 2</li>
          <li>Partido 3</li>
        </ul>
        <p>Resultados recientes:</p>
        <ul>
          <li>Resultado 1</li>
          <li>Resultado 2</li>
          <li>Resultado 3</li>
        </ul>
        <p><Link to="/calendario">Ver calendario completo</Link></p>
        <p><Link to="/noticias">Ver últimas noticias</Link></p>
      </div>
    );
  }
  export default HomeScreen;
