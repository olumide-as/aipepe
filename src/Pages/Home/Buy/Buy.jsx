import React from 'react';
import './Buy.css';
import { camelot, ethereum, swap, wallet } from '../../../Assets';


const Buy = () => {
  return  (
    <div className="aipepe__buy section__padding"  id="buy">

        <div className='aipepe__buy-list'>

            <h2>How to Buy</h2>

            <div className='aipepe__buy-list__item'>
                <img src={wallet} alt="wallet"/>
                <h5>Create a wallet</h5>
                <p>Download metamask or your wallet of choice from the app store 
                    or google play store for free. Desktop users, download the google 
                    chrome extension by going to metamask.io
                </p>
            </div>

            <div className='aipepe__buy-list__item'>
                <img src={ethereum} alt="ethereum"/>
                <h5>Get some ETH</h5>
                <p>have ETH in your wallet to switch to $AIPEPE. 
                    If you don’t have any ETH, you can buy directly on metamask, 
                    transfer from another wallet, or buy on another exchange and send it to your wallet.
                </p>
            </div>

            <div className='aipepe__buy-list__item'>
                <img src={camelot} alt="camelot"/>
                <h5>Go to Camelot DEX </h5>
                <p>connect to Camelot DEX. Go to  <a href='https://app.camelot.exchange/' target="_blank" rel="noopener noreferrer">https://app.camelot.exchange/</a> in 
                    google chrome or on the browser inside your Metamask app. 
                    Connect your wallet. Paste the $AIPEPE token address into Camelot, 
                    select AiPepe, and confirm. When Metamask prompts you for a wallet signature, sign.
                </p>
            </div>

            <div className='aipepe__buy-list__item'>
                <img src={swap} alt="swap"/>
                <h5>Switch ETH for $AIPEPE </h5>
                <p>switch ETH for $AIPEPE. We have 15% taxes, so set Slippage to 20% and then click buy.</p>
            </div>
            
        </div>

    </div>
  )
}

export default Buy