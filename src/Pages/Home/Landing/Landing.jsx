import React  from 'react';
import './Landing.css';
import { AiPepe1, Discord, Telegram, Twitter} from '../../../Assets';
import { Social } from '../../../Components';


function Landing() {
  return (
    <div className="aipepe__home section__padding" id="home">
      
        <div className="aipepe__home-content">
            <h1>Ai Pepe</h1>
            <p>The most memeable AI memecoin in existence. <br></br>
            The dogs have had their day, it’s time for AIPepe to take reign on Arbitrum.
            </p>
            <div className='aipepe__home-brand'>
                <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Social imgUrl={Twitter }/></a>
                <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Social imgUrl={Telegram }/></a>
                <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Social imgUrl={Discord }/></a>
            </div>
        </div>

        <div className="aipepe__home-bg">
            <img src={AiPepe1} alt="Aipepe"/>
        </div>


    </div>
  );
}

export default Landing