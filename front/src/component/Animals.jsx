import React, { useEffect, useState } from 'react'
import axios from 'axios'

function  Animals() {
    const [animals,setAminals]=useState([])

    useEffect(() => {
        axios.get('/api/animals')
          .then((response) => {
            setAminals(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return (
        <div className="container">
          <h1 className="title">Fun animals Data </h1>
          <p className="count">Fun animals Data Count {animals.length}</p>
    
          <div className="card-grid">
            {animals.map((animal) => (
              <div key={animal.id} className="card">
                <img
                  src={animal.image || 'https://via.placeholder.com/300x150?text=No+Image'}
                  alt={animal.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">{animal.title || 'Untitled'}</h3>
                  <p className="card-text">{animal.content || 'No content available.'}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    
    
    

export default   Animals

