import { useEffect, useState } from 'react';

import axios from 'axios';

function Funfact() {
  const [facts, setfacts] = useState([]);

  useEffect(() => {
    axios.get('/api/facts')
      .then((response) => {
        setfacts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Fun Facts Data </h1>
      <p className="count">Fun Facts Data Count {facts.length}</p>

      <div className="card-grid">
        {facts.map((fact) => (
          <div key={fact.id} className="card">
            <img
              src={fact.image || 'https://via.placeholder.com/300x150?text=No+Image'}
              alt={fact.title}
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">{fact.title || 'Untitled'}</h3>
              <p className="card-text">{fact.content || 'No content available.'}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Funfact;


