import React from 'react';
import './Exchanges.css';
import { Brand } from '../../../Components';
import { bingx, btcex, coingecko, coinmarketcap, dextools, digifinex, gateio, houbi, ibank, mexc, okx, poloniex, trustwallet, uniswap } from '../../../Assets';


const Exchanges = () => {
  
  return (
    <div className="aipepe__exchanges section__padding " id='exchanges'>

      <div className="aipepe__exchanges-brand">
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={uniswap} brand="uniswap"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={mexc} brand="mexc"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={gateio} brand="gate.io"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={houbi} brand="huobi"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={poloniex} brand="poloniex"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={okx} brand="okx dex"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={ibank} brand="ibank"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={bingx} brand="bingx"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={trustwallet} brand="trustwallet"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={digifinex} brand="digifinex"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={btcex} brand="btcex"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={dextools} brand="dextools"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={coinmarketcap} brand="coinmarketcap"/></a>
        <a href="https://www.instagram.com/olumide_as/" target="_blank" rel="noopener noreferrer"><Brand imgUrl={coingecko} brand="coingecko"/></a>
      </div>

    </div>
  )
}

export default Exchanges