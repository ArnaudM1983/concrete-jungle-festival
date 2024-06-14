import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Partners.css';

const PartnersComponent = () => {
  // Déclare deux états pour stocker les partenaires médias et institutionnels
  const [mediaPartners, setMediaPartners] = useState([]);
  const [institutionalPartners, setInstitutionalPartners] = useState([]);

  useEffect(() => {
    // URL de l'API pour récupérer les partenaires
    const apiUrl = 'http://cjezdhm.cluster029.hosting.ovh.net/wp-json/wp/v2/partners?per_page=20';

    // Requête GET pour récupérer les partenaires
    axios.get(apiUrl)
      .then(response => {
        // Filtre les partenaires par catégories après avoir récupéré les données
        filterPartners(response.data);
      })
      .catch(error => {
        // Affiche une erreur en cas de problème lors de la requête
        console.error('Error fetching partners:', error);
      });
  }, []);

  // Fonction pour extraire l'URL de l'image du contenu HTML
  const extractImageFromContent = content => {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  // Fonction pour filtrer les partenaires en fonction de leurs catégories
  const filterPartners = allPartners => {
    const mediaPartners = allPartners.filter(partner => partner.categories.includes(19)); // Filtre les partenaires médias (ID de catégorie 19)
    const institutionalPartners = allPartners.filter(partner => partner.categories.includes(20)); // Filtre les partenaires institutionnels (ID de catégorie 20)

    // Met à jour les états avec les partenaires filtrés
    setMediaPartners(mediaPartners);
    setInstitutionalPartners(institutionalPartners);
  };

  return (
    <div className='partenaires text-center pt-5 pb-5 px-3'>

      {/* Première partie - Médias */}
      <h2>PARTENAIRES MÉDIAS</h2>
      <div className="d-flex flex-wrap justify-content-around pb-4">
        {mediaPartners.map(partner => (
          <div key={partner.id} className="col-12 col-md-4 col-lg-3 mt-3">
            {partner.content && (
              <>
                <img src={extractImageFromContent(partner.content.rendered)} alt={partner.title.rendered} className='img-fluid' />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Deuxième partie - Institutionnels */}
      <h2 className='pt-5'>PARTENAIRES INSTITUTIONNELS</h2>
      <div className="d-flex flex-wrap justify-content-around align-items-center">
        {institutionalPartners.map(partner => (
          <div key={partner.id} className="col-12 col-md-4 col-lg-3 mt-3">
            {partner.content && (
              <>
                <img src={extractImageFromContent(partner.content.rendered)} alt={partner.title.rendered} className='img-fluid' />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersComponent;
