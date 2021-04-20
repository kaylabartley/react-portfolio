import React from 'react';
import photo1 from '../../assets/small/1.jpg';
import photo2 from '../../assets/small/2.jpg';
import photo3 from '../../assets/small/3.jpg'
import photo4 from '../../assets/small/4.jpg';
import photo0 from '../../assets/small/0.jpg';

const PhotoList = () => {

  return (

      <div className="flex-row">
          <img
            src={photo1}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          <img
            src={photo2}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          <img
            src={photo3}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          <img
            src={photo4}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          <img
            src={photo0}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
      </div>
  );
};

export default PhotoList;