import React from 'react';
import photo1 from '../../assets/small/1.png';
import photo2 from '../../assets/small/2.png';
import photo3 from '../../assets/small/3.jpg'
import photo4 from '../../assets/small/4.jpg';
import photo0 from '../../assets/small/0.jpg';

const PhotoList = () => {

  return (

      <div className="flex-row">
          <a href="https://kaylabartley.github.io/horiseon-refactor/">
            <p>First assignment</p>
            <img
            src={photo1}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          </a>
          <a href="https://damp-citadel-01856.herokuapp.com/">
            <p>first project</p>
          <img
            src={photo2}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
          </a>
          <a href="https://damp-citadel-01856.herokuapp.com/">
            <p>second project</p>
          <img
            src="/"
            alt='image not here yet'
            className="img-thumbnail mx-1"
          />
          </a>
          <a href="https://damp-citadel-01856.herokuapp.com/">
            <p>third project</p>
          <img
            src="/"
            alt='image not here yet'
            className="img-thumbnail mx-1"
          />
          </a>
  
      </div>
  );
};

export default PhotoList;