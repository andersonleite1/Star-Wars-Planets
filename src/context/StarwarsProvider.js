import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './Context';

const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  ],
};

const INITIAL_COLUMN = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const StarwarsProvider = ({ children }) => {
  const [planetsAll, setPlanetsAll] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [column, setColumn] = useState(INITIAL_COLUMN);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlanets = async () => {
    setIsLoading(true);
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';
    const request = await fetch(url);
    const resolve = await request.json();
    setIsLoading(false);
    setPlanetsAll(resolve.results);
    setPlanets(resolve.results);
  };

  const filterPlanetByName = () => {
    const { filterByName: { name } } = filters;
    // ref: https://www.w3schools.com/jsref/jsref_filter.asp
    const filteredPlanets = planetsAll.filter(
      // ref: https://www.w3schools.com/jsref/jsref_includes.asp
      (planet) => planet.name.toLowerCase().includes(name.toLowerCase()),
    );
    return setPlanets(filteredPlanets);
  };

  const filterPlanetByNumericsValues = () => {
    const { filterByNumericValues } = filters;

    const columnData = filterByNumericValues[0].column;
    const valueData = filterByNumericValues[0].value;

    const filteredPlanetsBigger = planetsAll.filter(
      (planet) => planet[columnData] > parseFloat(valueData),
    );
    const filteredPlanetsMinors = planetsAll.filter(
      (planet) => planet[columnData] < parseFloat(valueData),
    );
    const filteredPlanetsEquals = planetsAll.filter(
      (planet) => planet[columnData] === valueData,
    );

    switch (filterByNumericValues[0].comparison) {
    case 'maior que':
      return setPlanets(filteredPlanetsBigger);
    case 'menor que':
      return setPlanets(filteredPlanetsMinors);
    case 'igual a':
      return setPlanets(filteredPlanetsEquals);
    default:
      return planets;
    }
  };

  const removeItemColumn = () => {
    const itemSelected = filters.filterByNumericValues[0].column;
    const items = column.filter((item) => item !== itemSelected);
    setColumn(items);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    filterPlanetByName();
  }, [filters]);

  const state = {
    planets,
    isLoading,
    filters,
    setFilters,
    column,
    filterPlanetByNumericsValues,
    removeItemColumn,
  };

  return (
    <StarwarsContext.Provider value={ state }>
      { children }
    </StarwarsContext.Provider>
  );
};

StarwarsProvider.propTypes = {
  // ref: https://stackoverflow.com/questions/50206801/what-is-the-difference-between-proptypes-node-and-proptypes-any-in-react/53246825
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
