import React, { useState } from 'react';
import './Navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { Logo } from '../../Assets';


const Menu = () => (
  <>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#buy">How to Buy</a>
    <a href="#tokenomics">Tokenomics</a>
    <a href="#roadmap">Roadmap</a>
    <div className='aipepe__navbar-button'><a href="#buynow">Buy Now</a></div>
  </>
)

const Navbar = () => {
  const [toggleMenu, SetToggleMenu] = useState(false);
  return (
    <div className="aipepe__navbar">

      <img src={Logo} alt="logo" />

      
      <div className="aipepe__navbar-links">
      <Menu/>
      </div>

      <div className="aipepe__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine color="#ffff" size={24} onClick={() => SetToggleMenu(false)}/>
            : <RiMenu3Line color="#ffff" size={24} onClick={() => SetToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className="aipepe__navbar-menu__container scale-up-tr">
              <div className="aipepe__navbar-menu__container-links">
              <Menu />
              </div>
            </div>
          )

          }
      </div>
 

    </div>
  )
}

export default Navbar

