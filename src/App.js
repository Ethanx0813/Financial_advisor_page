import React from 'react';
import Header from './Header';
import Services from './Services';
import Review from './Review';
import './App.css';
import Advise from './Advise';
import Image from './Image';
import Management from './Management';

const App = () => {
  return (
    <div>
      <Header />
      <Services />
      <Review />
      <Advise/>
      <Image/>
      <Management/>
      
    </div>
  );
};

export default App;
