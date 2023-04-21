import React from 'react';
import './Social.css';


const Social = ({imgUrl}) => {
  return (

    <div className="aipepe__social">
      <img src={imgUrl} alt="social"/>
    </div>
    
  )
}

export default Social