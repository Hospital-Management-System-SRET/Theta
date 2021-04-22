import React from "react";
import './Infrastructure.css'

const Infrastructure = () => {
  return (
    <div className="Home">
      <div className="lander">
        <h1>We are a recognized leader in high-tech ophthalmology services</h1>
        <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua.</p></div>
        <div className="image">
          <img src={require('./assets/image.png').default} alt="first pic" />
        </div>
        <div className='body'>
          <p>Next topic</p>
        </div>
    </div>
  );
};


export default Infrastructure;


