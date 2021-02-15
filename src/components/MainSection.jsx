import React from 'react';
import '../style/MainSection.css';
import { Button } from './Button';

function MainSection() {
  return (
    <div className='main-container'>
      <video className="main-video" src='./videos/production ID_4799189.mp4' autoPlay loop muted />
      <h1>juanSessions</h1>
      <p>Web and App Design - Frontend Development - Video and Audio Editing</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default MainSection;