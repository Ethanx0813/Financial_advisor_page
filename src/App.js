// App.js

import React from 'react';
import Header from './Header';
import Services from './Services';
//import Review from './Review';
import './App.css';
import Advise from './Advise';
import Image from './Image';
import Management from './Management';
import ImageTableComponent from './ImageTableComponent';
import Footer from './Footer';
import StepsComponent from './StepsComponent';
import InvestmentAdvice from './InvestmentAdvice';
//import MissionComponent from './MissionComponent';
import Review from './Review';
import AboutComponent from './AboutComponent';

const App = () => {
  return (
    <div>
      <Header />
      <Services />
      <StepsComponent />
      {/* <Advise/> */}
      <InvestmentAdvice/>
      <Image />
      {/* <MissionComponent/> */}
      <Management/>
      <Review/>
      <AboutComponent/>
      <ImageTableComponent/> 
      <Footer/>
    </div>
  );
};

export default App;
