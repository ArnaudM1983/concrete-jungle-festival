import React, { useEffect, useState } from 'react';
import '../styles/Programmation.css';

const Programmation = () => {
  // États pour stocker les concerts, les concerts filtrés et les filtres sélectionnés
  const [concerts, setConcerts] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(''); // État pour la date sélectionnée
  const [selectedVenue, setSelectedVenue] = useState(''); // État pour le lieu sélectionné
  const [selectedTime, setSelectedTime] = useState(''); // État pour l'heure sélectionnée

  useEffect(() => {
    // Requête AJAX pour récupérer les événements depuis WordPress
    const categories = 'concert,animation'; // Liste des catégories
    const perPage = 25;

    // Fetch pour récupérer les événements avec les catégories spécifiées
    fetch(`http://cjezdhm.cluster029.hosting.ovh.net/wp-json/tribe/events/v1/events?categories=${categories}&per_page=${perPage}`)
      .then(response => response.json())
      .then(data => {
        setConcerts(data.events); // Met à jour l'état des concerts avec les données récupérées
        setFilteredConcerts(data.events); // Initialise les concerts filtrés avec les mêmes données
      })
      .catch(error => console.error('Erreur lors de la récupération des événements :', error));
  }, []);

  // Filtre les concerts en fonction des filtres sélectionnés
  useEffect(() => {
    let filteredData = concerts;

    // Filtre par date
    if (selectedDate) {
      filteredData = filteredData.filter(concert => concert.start_date.includes(selectedDate));
    }

    // Filtre par lieu
    if (selectedVenue) {
      filteredData = filteredData.filter(concert => concert.venue.venue === selectedVenue);
    }

    // Filtre par heure
    if (selectedTime) {
      filteredData = filteredData.filter(concert => {
        const concertTime = new Date(concert.start_date).getHours();
        return concertTime.toString() === selectedTime;
      });
    }

    setFilteredConcerts(filteredData); // Met à jour l'état des concerts filtrés
  }, [selectedDate, selectedVenue, selectedTime, concerts]);

  // Récupére les options de filtre pour les menus déroulants
  const datesOptions = Array.from(new Set(concerts.map(concert => concert.start_date.slice(0, 10))));
  const venuesOptions = Array.from(new Set(concerts.map(concert => concert.venue.venue)));
  const timesOptions = Array.from(new Set(concerts.map(concert => new Date(concert.start_date).getHours().toString())));

  return (
    <div className='programmation'>
      <h2 className='pt-3 pb-4 text-center'>PROGRAMMATION</h2>

      <div className="filter-container text-center pb-4">

        {/* Menu déroulant pour la date */}
        <div className="filter-item mb-2">
          <label htmlFor="dateFilter" className='pe-2'>Filtrer par date:</label>
          <select id="dateFilter" className='button py-2 px-2' onChange={(e) => setSelectedDate(e.target.value)}>
            <option value="">Toutes les dates</option>
            {datesOptions.map(date => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </div>

        {/* Menu déroulant pour le lieu */}
        <div className="filter-item mb-2">
          <label htmlFor="venueFilter" className='pe-2'>Filtrer par scène:</label>
          <select id="venueFilter" className='button py-2 px-2' onChange={(e) => setSelectedVenue(e.target.value)}>
            <option value="">Tous les lieux</option>
            {venuesOptions.map(venue => (
              <option key={venue} value={venue}>{venue}</option>
            ))}
          </select>
        </div>

        {/* Menu déroulant pour l'heure */}
        <div className="filter-item mb-2">
          <label htmlFor="timeFilter" className='pe-2'>Filtrer par heure:</label>
          <select id="timeFilter" className='button py-2 px-2' onChange={(e) => setSelectedTime(e.target.value)}>
            <option value="">Toutes les heures</option>
            {timesOptions.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Liste des concerts filtrés */}
      <ul className='mb-0 px-3'>
        {filteredConcerts.map(concert => (
          <React.Fragment key={concert.id}>
            <li>
              <h3>{concert.title}</h3>
              <p>{concert.venue.venue}</p>
              <p>Date et Heure: {concert.start_date}</p>
            </li>
            <hr className='horizontal-line mb-0 pb-2' />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Programmation;
