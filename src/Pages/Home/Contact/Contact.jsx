import React from 'react'
import { Discord, Logo, Twitter } from '../../../Assets';
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
        
            <div className='aipepe__home-brand'>
                <a href="https://twitter.com/AiPepe_Arb" target="_blank" rel="noopener noreferrer"><Social imgUrl={Twitter }/></a>
                <a href="https://discord.gg/bNybP2ErPx" target="_blank" rel="noopener noreferrer"><Social imgUrl={Discord }/></a>
            </div>

            <p>
            $AIPEPE coin has no association with Matt Furie or his creation Pepe the Frog. 
            This token is simply paying homage to a meme we all love and recognize.
            <br></br><br></br>
            $AIPEPE is a meme coin with no intrinsic value or expectation of financial return. 
            There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
            </p>

        </div>

    </div>
  )
}

export default Contact