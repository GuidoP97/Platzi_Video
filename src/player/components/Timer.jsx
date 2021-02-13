import React from 'react';
import './styles/Timer.css'

const Timer = ({duration, currentTime}) => {
  return (
    <div className="Timer" >
      <p>
        <span>{currentTime} / {duration}</span>
      </p>
    </div>
  );
}

export default Timer;
