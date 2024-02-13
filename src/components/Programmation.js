import React, { useEffect, useState } from 'react';
import '../styles/Programmation.css';


const Programmation = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    // Utilisez une requête AJAX pour récupérer les événements depuis WordPress
    fetch('http://localhost:8888/concrete-jungle-festival/wp-json/tribe/events/v1/events')
      .then(response => response.json())
      .then(data => setConcerts(data.events))
      .catch(error => console.error('Erreur lors de la récupération des événements :', error));
  }, []);

  return (
    <div className='programmation'>
      <h2 className='pt-3 pb-4 text-center display-5'>PROGRAMMATION</h2>
      <ul>
        {concerts.map(concert => (
            <>
          <li key={concert.id}>
            <h3>{concert.title}</h3>
            <p>Date et Heure: {concert.start_date}</p>
            <p>{concert.venue.venue}</p>
          </li>
          <hr />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Programmation;