import React, { useContext } from 'react';
import StarwarsContext from '../context/Context';

export default function FilterNumericsPlanets() {
  const {
    column,
    filters,
    setFilters,
    filterPlanetByNumericsValues,
    removeItemColumn,
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
    removeItemColumn();
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
          {column.map((data, index) => (
            <option key={ `${data}-${index}` } value={ data }>{data}</option>
          ))}
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
