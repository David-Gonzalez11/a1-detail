import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function NavBar(props) {
  const style = {
    fontSize: '2rem',
    color: 'white',
    paddingLeft: '2rem'
  };
  return (
      <div className='row'>
        <div className='nav-bar'>
        <i className="bi bi-justify bi--2xl" style={style}></i>

        </div>
      </div>
  );
}
