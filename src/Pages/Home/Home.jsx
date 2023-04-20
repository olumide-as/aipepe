import React from 'react'
import About from './About/About'
import Buy from './Buy/Buy'
import Contact from './Contact/Contact'
import Exchanges from './Exchanges/Exchanges'
import Landing from './Landing/Landing'
import Roadmap from './Roadmap/Roadmap'

const Home = () => {
  return (
    <div>
      <Landing/>
      <Exchanges/>
      <About/>
      <Buy/>
      <Roadmap/>
      <Contact/>
    </div>
  )
}

export default Home