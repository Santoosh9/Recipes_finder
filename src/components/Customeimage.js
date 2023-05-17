import React from 'react';

const Customeimage = ({ imgSrc, pt }) => {
  return (
    <div className="customeimage" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Customeimage;
