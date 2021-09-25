import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Income</Title>
        <Icon name="arrow-up" />
      </Header>
      <Footer>
        <Amount>US 17,400.00</Amount>
        <LastTransaction>Last income on April 03.</LastTransaction>
      </Footer>
    </Container>
  );
}