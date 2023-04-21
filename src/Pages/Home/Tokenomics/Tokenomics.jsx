import React  from 'react';
import './Tokenomics.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


//Pie Chart function
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Tax Burn 15%', 'Development 4%', 'Buy ARB 3%', 'Top Traders Rewards 1%', 'Dividends to $AIPEPE and NFT Holders 4%', 'Rewards to $AIPEPE/ETH LP 2%', 'Burn 1%'],
  datasets: [
    {
      label: '# of Tokenomics',
      data: [15, 4, 3, 1, 4, 2, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(255, 75, 82, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',        
        'rgba(255, 75, 82, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


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
        <Doughnut data={data} />
        </div>

    </div>
  );
}

export default Tokenomics
