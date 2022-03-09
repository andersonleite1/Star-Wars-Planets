import React, { useContext } from 'react';
import styled from 'styled-components';
import StarwarsContext from '../context/Context';

export default function FilterNumericsPlanets() {
  const Container = styled.section`
    margin: 0 2rem;
  `;

  const Label = styled.label`
    font-size: 1rem;
    font-weight: 600;
    color: white;
  `;

  const Select = styled.select`
    height: 1.9rem;
    margin: 0.2rem;
    padding: 0 0.2rem;
    border-radius: 0.2rem;
    font-size: 0.9rem;

    &:focus {
      border: solid 2px yellow;
    }

    &:hover {
      border-color: yellow;
    }
  `;

  const Input = styled.input`
    margin: 0.2rem;
    padding: 0 0.5rem;
    height: 1.6rem;
    border-radius: 0.2rem;
    font-size: 0.9rem;

    &:hover {
      border-color: yellow;
    }
  `;

  const Button = styled.button`
    margin: 0.2rem;
    padding: 0 0.5rem;
    width: 5.3rem;
    height: 1.8rem;
    border: 1px solid darkgreen;
    border-radius: 0.2rem;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background-color: green;
    cursor: pointer;

    &:hover {
      background-color: darkgreen;
      border-color: yellow;
    }
  `;

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
    <Container>
      <Label htmlFor="column-filter">
        Column
        <Select
          name="column"
          id="column-filter"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          {column.map((data, index) => (
            <option key={ `${data}-${index}` } value={ data }>{data}</option>
          ))}
        </Select>
      </Label>
      <Label htmlFor="comparison-filter">
        Operator
        <Select
          name="comparison"
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </Select>
      </Label>
      <Input
        name="value"
        type="number"
        data-testid="value-filter"
        value={ filters.filterByNumericValues[0].value }
        onChange={ handleChange }
      />
      <Button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filter
      </Button>
    </Container>
  );
}
