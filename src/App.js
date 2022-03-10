import React from 'react';
import StarwarsProvider from './context/StarwarsProvider';
import TablePlanets from './components/TablePlanets';
import './App.css';
import Title from './components/Title';
import InputFilterPlanets from './components/InputFilterPlanets';
import FilterNumericsPlanets from './components/FilterNumericsPlanets';

function App() {
  return (
    <StarwarsProvider>
      <Title />
      <InputFilterPlanets />
      <FilterNumericsPlanets />
      <TablePlanets />
    </StarwarsProvider>
  );
}

export default App;
