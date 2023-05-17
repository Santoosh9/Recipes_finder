import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
const Port = () => {
  return (
    <div className="section port">
      <p className="text-port">
        <FontAwesomeIcon icon={faQuoteLeft} />
        Yes, we were crammed into caféteria-style seats and yes, we were tucking
        into the finest quality food in the world. But the food is so
        wonderfully comforting. Our bill came £23.70 for two with service, we
        were stuffed, and very happy.
      </p>
      <p className="author">Santosh Gajurel</p>
    </div>
  );
};

export default Port;
