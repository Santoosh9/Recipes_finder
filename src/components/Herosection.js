import React from 'react';
import Customeimage from './Customeimage';

const Herosection = () => {
  const images = [
    '/images/braderoll.jpg',
    '/images/1200px-Momo_nepal.jpg',
    '/images/burger.jpg',
    '/images/coke.jpg',
    '/images/icecream.jpg',
    '/images/juse.jpg',
    '/images/pizza.jpg',
    '/images/somosa.jpg',
    '/images/sale.jpg',
  ];
  return (
    <div className="section hero ">
      <div className="col typrography">
        <h1 className="title">We Are About</h1>
        <p className="parag">
          Food app is the place where you can check the recipes of diffrent
          types of international and local food items whichever you like.
        </p>
        <button className="btn">explore</button>
      </div>
      <div className="col gallary">
        {images.map((src, index) => (
          <Customeimage key={index} imgSrc={src} pt={'85%'} />
        ))}
      </div>
    </div>
  );
};

export default Herosection;
