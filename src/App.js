// App.js
import React from 'react';
import Header from './Header';
import Services from './Services';
import './App.css';
import InfoBoxes from './InfoBoxes';
import PositionsWithNames from './PositionsWithNames';
import TwoBoxes from './TwoBoxes';
import Efficient from './Efficient.js';
import InvestmentApproach from './InvestmentApproach.js';
import UnlockPotential from './UnlockPotential.js';

const App = () => {
  return (
    <div>
      <Header />
      <Services />
<InfoBoxes/>
<PositionsWithNames/>
<TwoBoxes/>
<Efficient/>
<InvestmentApproach/>
<UnlockPotential/>
    </div>
  );
};

export default App;
