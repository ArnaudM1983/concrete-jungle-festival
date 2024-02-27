import React, { useEffect, useState } from 'react';
import '../styles/Concerts.css';


const Concerts = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    // Utilisez une requête AJAX pour récupérer les événements depuis WordPress
    const category = 'Concert';
    const perPage = 20;
    fetch(`http://cjezdhm.cluster029.hosting.ovh.net/wp-json/tribe/events/v1/events?categories=${category}&per_page=${perPage}`)      
    .then(response => response.json())
      .then(data => setConcerts(data.events))
      .catch(error => console.error('Erreur lors de la récupération des événements :', error));
  }, []);

  return (
    <div className='concert text-center'>
      <h2 className='pb-5 pt-5'>CONCERTS</h2>
      <ul className='px-3 pb-3'>
        {concerts.map(concert => (
          <li key={concert.id} className='card mb-5'>
            <img src={concert.image.url} alt={concert.title} className='image-concert pb-4'/>
            <h3>{concert.title}</h3>
            <p>Date et Heure: {concert.start_date}</p>
            <p>{concert.venue.venue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Concerts;