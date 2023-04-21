import React  from 'react';
import './Landing.css';
import { AiPepe1, Discord, Twitter} from '../../../Assets';
import { Social } from '../../../Components';


function Landing() {
  return (
    <div className="aipepe__home section__padding" id="home">
      
        <div className="aipepe__home-content">
            <h1>AiPepe</h1>
            <p>The most memeable AI memecoin in existence. <br></br>
            The dogs have had their day, it’s time for AiPepe to take reign on Arbitrum.
            </p>
            <div className='aipepe__home-brand'>
                <a href="https://twitter.com/AiPepe_Arb" target="_blank" rel="noopener noreferrer"><Social imgUrl={Twitter }/></a>
                <a href="https://discord.gg/bNybP2ErPx" target="_blank" rel="noopener noreferrer"><Social imgUrl={Discord }/></a>
            </div>
        </div>

        <div className="aipepe__home-bg">
            <img src={AiPepe1} alt="Aipepe bg"/>
        </div>


    </div>
  );
}

export default Landing