import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Partners.css';

const PartnersComponent = () => {
  const [mediaPartners, setMediaPartners] = useState([]);
  const [institutionalPartners, setInstitutionalPartners] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://cjezdhm.cluster029.hosting.ovh.net/wp-json/wp/v2/partners?per_page=20';

    axios.get(apiUrl)
      .then(response => {
        filterPartners(response.data);
      })
      .catch(error => {
        console.error('Error fetching partners:', error);
      });
  }, []);

  const extractImageFromContent = content => {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  const filterPartners = allPartners => {
    const mediaPartners = allPartners.filter(partner => partner.categories.includes(19)); // Remplacez 1 par l'ID de la catégorie "Médias"
    const institutionalPartners = allPartners.filter(partner => partner.categories.includes(20)); // Remplacez 2 par l'ID de la catégorie "Institutionnels"

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
