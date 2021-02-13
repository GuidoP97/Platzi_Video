import React from 'react';
import './styles/VideoPlayerLayout.css'

const VideoPlayerLayout = ({children, setRef}) => (
    <div 
      className="VideoPlayer"
      ref={setRef}
    >
      {children}
    </div>
)

export default VideoPlayerLayout;
