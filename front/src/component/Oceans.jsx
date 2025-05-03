import React, { useEffect, useState } from 'react'
import axios from 'axios'

function  Oceans() {
    const [oceans,setOceans]=useState([])

    useEffect(() => {
        axios.get('/api/oceans')
          .then((response) => {
            setOceans(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return (
        <div className="container">
          <h1 className="title">Fun oceans Data </h1>
          <p className="count">Fun oceans Data Count {oceans.length}</p>
    
          <div className="card-grid">
            {oceans.map((ocean) => (
              <div key={ocean.id} className="card">
                <img
                  src={ocean.image || 'https://via.placeholder.com/300x150?text=No+Image'}
                  alt={ocean.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">{ocean.title || 'Untitled'}</h3>
                  <p className="card-text">{ocean.content || 'No content available.'}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    
    
    

export default  Oceans