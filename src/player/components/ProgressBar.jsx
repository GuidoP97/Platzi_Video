import React from 'react';
import './styles/ProgressBar.css'

const ProgressBar = ({duration, value, handleProgressChange}) => {
  return (
    <div className="ProgressBar" >
      <input 
        type="range"
        min={0}
        max={duration}
        value={value}
        onChange={handleProgressChange}
      />
    </div>
  );
}

export default ProgressBar;
