import React from 'react';
import './Footer.css';
import {AiTwotoneHeart} from 'react-icons/ai';

const Footer = () => {

  const current = new Date();
  const date = current.getFullYear();

  return (
    <div className='aipepe__footer section__padding-footer'>

      <p> &copy;	 Copyright {date}</p>
      <p> Designed with <AiTwotoneHeart/> by AiPepe Team</p>

    </div>
  )
}

export default Footer