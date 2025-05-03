import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Space() {
    const [spaces,seSpacespace]=useState([])

    useEffect(() => {
        axios.get('/api/spaces')
          .then((response) => {
            seSpacespace(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return (
        <div className="container">
          <h1 className="title">Fun spaces Data </h1>
          <p className="count">Fun spaces Data Count {spaces.length}</p>
    
          <div className="card-grid">
            {spaces.map((space) => (
              <div key={space.id} className="card">
                <img
                  src={space.image || 'https://via.placeholder.com/300x150?text=No+Image'}
                  alt={space.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">{space.title || 'Untitled'}</h3>
                  <p className="card-text">{space.content || 'No content available.'}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    
    
    

export default Space