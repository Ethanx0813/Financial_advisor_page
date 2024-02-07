import React from 'react';
import Header from './Header';
import Services from './Services';
import Review from './Review';
import './App.css';
import Advise from './Advise';
import Image from './Image';
import Management from './Management';import ImageTableComponent from './ImageTableComponent';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Services />
      <Review />
      <Advise/>
      <Image/>
      <Management/>
       <ImageTableComponent/> 
       <Footer/>
      
    </div>
  );
};

export default App;
