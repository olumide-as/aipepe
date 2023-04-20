import React from 'react';
import './Roadmap.css';



const Roadmap = () => {
  return  (
    <div className="aipepe__roadmap section__padding"  id="roadmap">
        
        <h2>Road Map</h2>

        <div className='aipepe__roadmap-list'>

            <div className='aipepe__roadmap-list__item'>
                <h5>Phase 1</h5>
                <ul>
                    <li>Launch</li>
                    <hr/>
                    <li>CoinGecko/Coinmarketcap Listings</li>
                    <hr/>
                    <li>1,000+ Holders</li>
                    <hr/>
                    <li>Get $PEPE Trending on twitter with our memetic power</li>
                    <hr/>
                </ul>
            </div>

            <div className='aipepe__roadmap-list__item'>
                <h5>Phase 2</h5>
                <ul>
                    <li>Community Partnerships Pepe Times digital newsletter</li>
                    <hr/>
                    <li>Formation of token gated discord group, Pepe Palace, for holders, more details tba</li>
                    <hr/>
                    <li>CEX Listings 10,000+holders</li>
                    <hr/>
                </ul>
            </div>

            <div className='aipepe__roadmap-list__item'>
                <h5>Phase 3</h5>
                <ul>
                    <li>Pepe themed merch, % revenues to $pepe buy and burn</li>
                    <hr/>
                    <li>Pepe Academy: details tba</li>
                    <hr/>
                    <li>Pepe Tools: details tba</li>
                    <hr/>
                    <li>T1 Exchange Listings 100,000+ holders</li>
                    <hr/>
                    <li>Flip Bitcoin</li>
                    <hr/>
                </ul>
            </div>
        
        </div>

    </div>
  )
}

export default Roadmap