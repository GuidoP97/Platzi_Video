import React from 'react';
import Category from './Category.jsx';
import SearchContainer from '../../widgets/containers/SearchContainer.jsx'
import '../styles/Categories.css'

const Categories = ({categories, handleOpenModal}) => {
  return (
    <div className="Categories" >
      <SearchContainer/>
      {
        categories.map((item) => {
          return (
          <Category 
            key={item.id} 
            {...item}
            handleOpenModal={ handleOpenModal }
          />
        )})
      }
    </div>
  );
}

export default Categories;