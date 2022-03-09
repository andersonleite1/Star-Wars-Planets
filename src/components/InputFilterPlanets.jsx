import React, { useContext } from 'react';
import styled from 'styled-components';
import StarwarsContext from '../context/Context';

export default function InputFilterPlanets() {
  const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Input = styled.input`
    width: 23rem;
    height: 1.5rem;
    border: 0.1rem solid #000;
    border-radius: 0.5rem;
    padding: 0.1rem 0.5rem;
    margin-bottom: 2rem;

    &:focus {
      border: solid 2px #FEDB2B;
    }

    &:hover {
      border-color: #FEDB2B;
    }
  `;

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
    <Container>
      <Input
        type="text"
        name="name"
        className="input-filter-name"
        data-testid="name-filter"
        placeholder="Filter by name"
        value={ name }
        onChange={ handleChange }
      />
    </Container>
  );
}
