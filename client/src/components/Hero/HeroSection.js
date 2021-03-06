import React from "react";
import { Button } from "../Button";
import './index.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/video/video-1.mp4" autoPlay loop muted />
        <h1>Rare Hair Beauty Salon</h1>
        <p>Appointment Only</p>
          <div className='hero-btns'>
              <Button 
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'>
                  
                  GET STARTED
              </Button>
          </div>
        </div> 
           );
}

export default HeroSection;