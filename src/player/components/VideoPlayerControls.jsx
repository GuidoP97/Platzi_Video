import React from 'react';
import './styles/VideoPlayerControls.css'

const VideoPlayerControls = ({children}) => {
  return (
    <div className="VideoPlayerControls" >
      {children}
    </div>
  );
}

export default VideoPlayerControls;
