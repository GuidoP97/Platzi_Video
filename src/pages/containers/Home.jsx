import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayout.jsx';
import Categories from '../../categories/components/Categories.jsx';
import Related from '../components/Related.jsx'
import ModalContainer from '../../widgets/containers/ModalContainer.jsx';
import Modal from '../../widgets/components/Modal.jsx';
import HandleError from '../../error/containers/HandleError.jsx'
import VideoPlayer from '../../player/containers/VideoPlayer.jsx'

class Home extends Component {
  state = {
    modalVisible: false,
    media:{}
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    })
  }

  render() {
    const { categories } = this.props.data
    const { modalVisible, media } = this.state
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories 
            categories={ categories } 
            handleOpenModal={this.handleOpenModal} 
            />
          {
            (modalVisible) && 
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal} >
                <VideoPlayer
                  autoPlay
                  src={media.src}
                  title={media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    );
  }
}

export default Home;