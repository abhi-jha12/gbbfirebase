import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="card bg-white p-4  rounded-lg">
      <img src="/assets/hero.png" alt="Logo" className="h-40" />
      <p className="text-gray-600 text-lg my-8" style={{ marginLeft: '0px' }}>{content}</p>
      {/* Add more structure as needed */}
    </div>
  );
};

export default Card;