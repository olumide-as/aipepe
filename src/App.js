import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { BackTop } from 'antd';
import { Earn, Home, Lucky, NoPage } from './Pages';
import { Navbar, Footer } from './Components';


const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/blog" element={<Earn />} />
        <Route path="/products" element={<Lucky />} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    <BackTop />

    </div>
  ) 
}

export default App 
