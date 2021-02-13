import React from 'react';
import Playlist from '../../playlist/components/Playlist.jsx'
import '../styles/Category.css'

const Category = ({playlist, description, title, handleOpenModal}) => {
  return (
    <div className="Category" >
      <p className="Category-description" >{description}</p>
      <h2 className="Category-title" >{title}</h2>
      <Playlist 
        playlist={playlist}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
}

export default Category;
