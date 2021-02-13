import React from 'react';
import Play from '../../icons/components/Play.jsx'
import Pause from '../../icons/components/Pause.jsx'
import './styles/PlayPause.css'

const PlayPause = ({pause, handleClick}) => {
  return (
    <div className="PlayPause" >
      {
        pause ?
        <button
          onClick={handleClick}
        >
          <Play size={25} color="white" />
        </button> :
        <button
          onClick={handleClick}
        >
          <Pause size={25} color="white" />
        </button>        
      }
    </div>
  );
}

export default PlayPause;
