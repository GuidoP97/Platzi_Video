import React, { Component } from 'react';
import '../components/styles/Video.css'

class Video extends Component {
  
  handleTogglePlay = () => {
    if(this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.pause !== this.props.pause){
      this.handleTogglePlay()
    }
  }

  setRef = (element) => {
    this.video = element
  }
  
  render() {
    const {
      src, 
      autoPlay, 
      handleLoadedMetadata, 
      handleTimeUpdate, 
      handleSeeking, 
      handleSeeked,
    } = this.props

    return (
      <div className="Video">
        <video
          autoPlay={autoPlay}
          src={src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    );
  }
}

export default Video;