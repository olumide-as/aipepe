import React from 'react';
import { charts } from '../../../Assets';
import './Tokenomics.css';



function Tokenomics() {
  return (
    <div className="aipepe__tokenomics section__padding" id="tokenomics">

        <div className="aipepe__tokenomics-content">
            <h2>Tokenomics</h2>
            <p>What is $AIPEPE?<br></br><br></br>
            AIPEPE is a deflationary token utilized by the Aipepe ecosystem. 
            The total supply is 9,000,000,000,000 tokens, accessible to the entire Arbitrum community. 
            A 15% burn tax necessitates a 20% slippage tolerance for transactions. 
            Buying AIPEPE grants a passive income for potential ARB rewards, and staking AIPEPE can yield further earnings.
            </p>
        </div>

        <div className="aipepe__tokenomics-bg">
          <img src={charts} alt="Aipepe About"/>
        </div>

    </div>
  );
}

export default Tokenomics

