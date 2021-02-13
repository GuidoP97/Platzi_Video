import React from 'react';
import './Modal.css'

const Modal = ({children, handleClick}) => {
  return (
    <div className="Modal" >
      {
        children
      }
      <button
        className="Modal-close"
        onClick={handleClick}
      ></button>
    </div>
  );
}

export default Modal;
