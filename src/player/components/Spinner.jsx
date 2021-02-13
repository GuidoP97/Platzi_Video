import React from 'react';
import './styles/Spinner.css'

const Spinner = ({active}) => {
  if(!active){
    return null
  }
  return (
    <div className="Spinner">
      <span>Cargando...</span>  
    </div>
  );
}

export default Spinner;
