import React from 'react';
import './Exchanges.css';
import { Brand } from '../../../Components';
import { bingx, btcex, camelot, coingecko, coinmarketcap, dextools, digifinex, gateio, houbi, ibank, mexc, okx, poloniex, trustwallet } from '../../../Assets';


const Exchanges = () => {
  
  return (
    <div className="aipepe__exchanges section__padding " id='exchanges'>

      <div className="aipepe__exchanges-brand">
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={mexc} brand="mexc (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={camelot} brand="camelot"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={gateio} brand="gate.io (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={houbi} brand="huobi (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={poloniex} brand="poloniex (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={okx} brand="okx dex (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={ibank} brand="ibank (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={bingx} brand="bingx (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={trustwallet} brand="trustwallet (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={digifinex} brand="digifinex (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={btcex} brand="btcex (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={dextools} brand="dextools (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={coinmarketcap} brand="coinmarketcap (coming soon)"/></a>
        <a href="#home" target="_blank" rel="noopener noreferrer"><Brand imgUrl={coingecko} brand="coingecko (coming soon)"/></a>
      </div>

    </div>
  )
}

export default Exchanges