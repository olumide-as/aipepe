import React  from 'react';
import './About.css';
import { AiPepe2} from '../../../Assets';


function About() {
  return (
    <div className="aipepe__about section__padding" id="about">

        <div className="aipepe__about-bg">
            <img src={AiPepe2} alt="Aipepe"/>
        </div>
        
        <div className="aipepe__about-content">
            <h2>About Us</h2>
            <p>The most memeable AI memecoin in existence. <br></br>
            The dogs have had their day, it’s time for AIPepe to take reign on Arbitrum.
            </p>
        </div>

    </div>
  );
}

export default About