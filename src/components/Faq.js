import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Faq = () => {
  const [faqContent, setFaqContent] = useState('');

  useEffect(() => {
    const fetchFaqContent = async () => {
      try {
        const response = await axios.get('http://localhost:8888/concrete-jungle-festival/wp-json/wp/v2/pages?slug=faq');
        const faqPage = response.data[0];
        setFaqContent(faqPage.content.rendered);
      } catch (error) {
        console.error('Erreur lors de la récupération de la page FAQ :', error);
      }
    };

    fetchFaqContent();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: faqContent }} />
  );
};

export default Faq;

