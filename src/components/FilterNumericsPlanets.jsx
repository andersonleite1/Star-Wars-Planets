import React, { useContext } from 'react';
import StarwarsContext from '../context/Context';

export default function FilterNumericsPlanets() {
  const {
    filters,
    setFilters,
    filterPlanetByNumericsValues,
  } = useContext(StarwarsContext);

  const handleChange = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [name]: value,
        },
      ],
    });
  };

  const handleClick = () => {
    filterPlanetByNumericsValues();
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Column
        <select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operator
        <select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        value={ filters.filterByNumericValues[0].value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filter
      </button>
    </div>
  );
}
