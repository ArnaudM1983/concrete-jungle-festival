import React, { useEffect, useState } from 'react';
import '../styles/Concerts.css';


const Concerts = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    // Utilisez une requête AJAX pour récupérer les événements depuis WordPress
    fetch('http://localhost:8888/concrete-jungle-festival/wp-json/tribe/events/v1/events')
      .then(response => response.json())
      .then(data => setConcerts(data.events))
      .catch(error => console.error('Erreur lors de la récupération des événements :', error));
  }, []);

  return (
    <div>
      <h2 className='mt-5'>CONCERTS</h2>
      <ul>
        {concerts.map(concert => (
          <li key={concert.id}>
            <h3>{concert.title}</h3>
            <img src={concert.image.url} alt={concert.title} />
            <p>Date et Heure: {concert.start_date}</p>
            <p>Lieu: {concert.venue.venue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Concerts;