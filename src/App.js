import React from 'react';
import Header from './Header';
import Services from './Services';
import './App.css';
// import Advise from './Advise';
import Image from './Image';
import Management from './Management';
// import ImageTableComponent from './ImageTableComponent';
import Footer from './Footer';
import StepsComponent from './StepsComponent';
import InvestmentAdvice from './InvestmentAdvice';
// import MissionComponent from './MissionComponent';
import Review from './Review';
import AboutComponent from './AboutComponent';
import UnstoppableComponent from './UnstoppableComponent';

const App = () => {
  return (
    <div>
      <Header />
      <Services />
      <StepsComponent />
      {/* <Advise/> */}
      <InvestmentAdvice />
      <UnstoppableComponent />
      <Image />
      {/* <MissionComponent/> */}
      <Management />
      <Review />
      <AboutComponent />
      {/* <ImageTableComponent/> */}
      <Footer />
    </div>
  );
};

export default App;
