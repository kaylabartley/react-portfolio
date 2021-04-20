import React from 'react';
import photo from '../../assets/img/picture.jpg';
function AboutMe() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
            src={photo}
            alt='afdsf'
            className="img-thumbnail mx-1"
          />
      <div className="my-2">
        <p>
        I am apart of the Vanderbilt Coding Bootcamp. I know javascipt, html, css, and use a MERN stack. I want to get a job as a software developer or web developer. I graduate from Oakwood University in 2023. I also know C++, Python, and C#.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
