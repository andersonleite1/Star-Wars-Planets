import React from 'react';
import StarwarsProvider from './context/StarwarsProvider';
import Table from './components/Table';
import './App.css';
import InputFilterPlanets from './components/InputFilterPlanets';
import FilterNumericsPlanets from './components/FilterNumericsPlanets';

function App() {
  return (
    <StarwarsProvider>
      <h1>Projeto Star Wars - Trybe</h1>
      <InputFilterPlanets />
      <FilterNumericsPlanets />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
