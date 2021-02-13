import React from 'react';
import './Search.css'

const Search = ({handleChange, handleSubmit, setRef, value}) => (
  <form 
    action="#" 
    className="Search"
    onSubmit={handleSubmit}
  >
    <input
      ref={setRef}
      type="text" 
      name="search" 
      className="Search-input"
      placeholder="Busca tu video favorito"
      onChange={handleChange}
      value={value}
      // defaultValue="Luis Fonsi"
    />
  </form>
)

export default Search;