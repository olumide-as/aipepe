import React from 'react'
import { Discord, Logo, Telegram, Twitter } from '../../../Assets';
import { Social } from '../../../Components';
import './Contact.css';

const Contact = () => {
  return (
    <div className="aipepe__contact section__padding"  id="contact">
        
        <h2>Contact Us</h2>

        <div className='aipepe__contact-list'>

            <div className='aipepe__contact-logo'>
                <img src={Logo} alt="logo" />
            </div>
        
            <p>email: masterpepe@pepe.vip</p>

            <div className='aipepe__home-brand'>
                <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Social imgUrl={Twitter }/></a>
                <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Social imgUrl={Telegram }/></a>
                <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Social imgUrl={Discord }/></a>
            </div>

            <p>
            $pepe coin has no association with Matt Furie or his creation Pepe the Frog. 
            This token is simply paying homage to a meme we all love and recognize.
            <br></br><br></br>
            $PEPE is a meme coin with no intrinsic value or expectation of financial return. 
            There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
            </p>

        </div>

    </div>
  )
}

export default Contact