import * as React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${({theme}) => theme.font.family.joti};
`;

function IndexPage() {
  return (
    <main>
      <H1>
        Main Page
      </H1>
    </main>
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}
