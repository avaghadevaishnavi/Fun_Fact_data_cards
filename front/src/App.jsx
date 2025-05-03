import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Fun Facts Data </h1>
      <p className="count">Fun Facts Data Count {jokes.length}</p>

      <div className="card-grid">
        {jokes.map((joke) => (
          <div key={joke.id} className="card">
            <img
              src={joke.image || 'https://via.placeholder.com/300x150?text=No+Image'}
              alt={joke.title}
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">{joke.title || 'Untitled'}</h3>
              <p className="card-text">{joke.content || 'No content available.'}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
