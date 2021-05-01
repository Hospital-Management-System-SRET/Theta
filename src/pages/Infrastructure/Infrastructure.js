import React from "react";
import './Infrastructure.css'
import Toggle from "./Toggle/Toggle";



const Infrastructure = (props) => {

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
        <div className="container">
          <Toggle />
        </div>
      </div>

      <div className='end'>
        <h2>Our Workspace</h2>
        <br></br>
        {/* <div class="outer-grid">
        <div class="inner-grid">
            <img src={require('./assets/eyec.jpg').default} alt="Snow" width="550" height="400"/>

            <img src={require('./assets/child.jpg').default} alt="Snow" width="550" height="400"/>

            <img src={require('./assets/left.jpg').default} alt="Snow" width="550" height="400"/>
          </div>
        </div> */}
        <h2>
        The face is a picture of the mind with an eyes
        <p>Have questions?</p>
        <p>(123) 456-7890</p>
        </h2>
  
      </div>
      <div className = "footer">
        
      </div>
    </div>
  );
};


export default Infrastructure;


