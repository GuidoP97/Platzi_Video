import React from 'react';
import Media from './Media.jsx';
import '../styles/Playlist.css'
// import Play from '../../icons/components/Play.jsx';


const Playlist = ({ playlist, handleOpenModal }) => {
  return (
    <div className="Playlist" >
      {
        playlist.map((item) => {
          return(
            <Media 
              {...item} 
              key={item.id}
              handleOpenModal={ handleOpenModal }
            />
          )
        })
      }
    </div>
  );
}

export default Playlist;