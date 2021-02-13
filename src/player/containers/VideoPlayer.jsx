import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout.jsx';
import Video from '../components/Video.jsx'
import Title from '../components/Title.jsx'
import PlayPause from '../components/PlayPause.jsx'
import Timer from '../components/Timer.jsx'
import formattedTime from '../utilities/timeFunctions'
import Controls from '../components/VideoPlayerControls.jsx'
import ProgressBar from '../components/ProgressBar.jsx';
import Spinner from '../components/Spinner.jsx';
import Volume from '../components/Volume.jsx';
import FullScreen from '../components/FullScreen.jsx';

class VideoPlayer extends Component {

  state = {
    pause:true,
    duration: 0,
    currentTime:0,
    loading:false
  }

  handleTogglePlay = (e) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  handleLoadedMetadata = (e) => {
    this.video = e.target
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = (e) => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  handleProgressChange = (e) => {
    this.video.currentTime = e.target.value
  }

  handleSeeking = (e) => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = (e) => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = (e) => {
    this.video.volume = e.target.value
  }

  handleFullScreenClick = (e) => {
    if(!document.fullscreenElement){ 
      this.player.webkitRequestFullScreen()
    } else {
      document.webkitExitFullscreen()
    }
  }

  setRef = (element) => {
    this.player = element
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoPlay)
    })
  }

  render() {
    const {pause, duration, currentTime, loading} = this.state
    const { autoPlay, src, title } = this.props
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title title={title} />
        <Controls>
          <PlayPause
            pause={pause}
            handleClick={this.handleTogglePlay}
          />
          <Timer 
            duration={formattedTime(duration)}
            currentTime={formattedTime(currentTime)}
          />
          <ProgressBar
            duration={duration}
            value={currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume handleVolumeChange={this.handleVolumeChange} />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
        <Spinner
          active={loading}
        />
        <Video
          autoPlay={autoPlay}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          pause={pause}
          src={src}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;