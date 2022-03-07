import React from 'react';
import styled from 'styled-components';

export default function Title() {
  const TitlePage = styled.h1`
    font-family: 'Russo One', sans-serif;
    font-size: 2.5rem;
    color: #f2f2f2;
    text-shadow: 0 0 0.5rem #FEDB2B;
    text-align: center;
  `;

  return (
    <section>
      <TitlePage>Star Wars - Planets</TitlePage>
    </section>
  );
}
