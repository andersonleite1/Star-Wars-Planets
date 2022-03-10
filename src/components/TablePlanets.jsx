import React, { useContext } from 'react';
import styled from 'styled-components';
import StarwarsContext from '../context/Context';

export default function TablePlanets() {
  const Container = styled.section`
    margin: 0 2rem;
  `;

  const Table = styled.table`
    border-collapse: collapse;
    text-align: center;
    border: 1px solid;
    background-color: black;
    margin-top: 0.8rem;

    &
    th {
      border: 1px solid;
      padding: 0.2rem;
      color: white;
      background-color: #011bff;
    }
    td {
      border: 1px solid;
      color: white;
      font-size: 1.1rem;
      font-weight: 500;
    }
  `;

  const { planets, isLoading } = useContext(StarwarsContext);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          { isLoading && <tr><td>Loading...</td></tr>}
          { planets.map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.residents.length }</td>
              <td>{ planet.films.length }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
            </tr>
          )) }
        </tbody>
      </Table>
    </Container>
  );
}
