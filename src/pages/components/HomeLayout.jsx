import React from 'react';
import './styles/HomeLayout.css'

const HomeLayout = (props) => {
  return (
    <section className="HomeLayout" >
      {props.children}
    </section>
  );
}

export default HomeLayout;
