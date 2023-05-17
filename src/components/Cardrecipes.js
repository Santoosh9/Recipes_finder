import React from 'react';

const Cardrecipes = (recipe) => {
  return <div className="recipeTile">{recipe['recipe']['label']}</div>;
};

export default Cardrecipes;
