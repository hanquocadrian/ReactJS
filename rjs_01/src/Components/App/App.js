import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../00_AG_Header/Header';
import Sliders from '../00_AG_Sliders/Sliders';
import Content from '../00_AG_Content/Content';
import Footer from '../00_AG_Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Sliders />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
