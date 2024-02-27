import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Partners.css'

const PartnersComponent = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Remplacez l'URL ci-dessous par l'URL de votre API WordPress
    const apiUrl = 'http://cjezdhm.cluster029.hosting.ovh.net/wp-json/wp/v2/partners?per_page=20';

    axios.get(apiUrl)
      .then(response => {
        setPartners(response.data);
      })
      .catch(error => {
        console.error('Error fetching partners:', error);
      });
  }, []);

  const extractImageFromContent = content => {
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  return (
    <div className='partenaires text-center pt-5 pb-5 px-3'>
      <h2>PARTENAIRES</h2>
      <div>
        {partners.map(partner => (
          <div key={partner.id}>
            <h3>{partner.title.rendered}</h3>
            {partner.content && (
              <img src={extractImageFromContent(partner.content.rendered)} alt={partner.title.rendered} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersComponent;
