import React from 'react';
import FullScreenIcon from '../../icons/components/Full-screen.jsx'
import './styles/FullScreen.css'

const FullScreen = ({handleFullScreenClick}) => (
  <div 
    className="FullScreen"
    onClick={handleFullScreenClick}
  >
    <FullScreenIcon
      size={25}
      color="white"
    />
  </div>
)

export default FullScreen;
