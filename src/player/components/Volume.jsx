import React from 'react';
import VolumeIcon from '../../icons/components/Volume.jsx'
import './styles/Volume.css'

const Volume = ({handleVolumeChange}) => {
  return (
    <button
      className="Volume"
    >
      <VolumeIcon
        color="white"
        size={25}
      />
      <div className="Volume-range">
        <input 
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={handleVolumeChange}
        />
      </div>
    </button>
  );
}

export default Volume;
