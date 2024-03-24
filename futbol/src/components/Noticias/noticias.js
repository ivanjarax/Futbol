
import React, { useState, useEffect } from 'react';
function Noticias() {
    const [noticias, setNoticias] = useState([]);
  
    useEffect(() => {
      fetch('https://api.football-data.org/v2/news')
        .then((response) => response.json())
        .then((data) => setNoticias(data.articles));
    }, []);
  
    return (
      <div>
        <h1>Noticias</h1>
        <ul>
          {noticias.map((noticia) => (
            <li key={noticia.id}>
              <h2>{noticia.title}</h2>
              <p>{noticia.description}</p>
              <a href={noticia.url}>Leer más...</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default Noticias;
