import React, { useContext } from 'react';
import StarwarsContext from '../context/Context';

export default function InputFilterPlanets() {
  const { filters, setFilters } = useContext(StarwarsContext);
  const { filterByName: { name } } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <input
      type="text"
      name="name"
      className="input-filter-name"
      data-testid="name-filter"
      placeholder="Filter by name"
      value={ name }
      onChange={ (event) => handleChange(event) }
    />
  );
}
