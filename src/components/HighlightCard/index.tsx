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

interface CardProps {
  type: 'income' | 'expense' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
};

const icon = {
  income: 'arrow-up-circle',
  expense: 'arrow-down-circle',
  total: 'dollar-sign',
};

export function HighlightCard( {
  type,
  title,  
  amount,
  lastTransaction,
} : CardProps) {
  return (
    <Container cardType={type}>
      <Header>
        <Title cardType={type}>{title}</Title>
        <Icon name={icon[type]} cardType={type} />
      </Header>
      <Footer>
        <Amount cardType={type}>US {amount}</Amount>
        <LastTransaction cardType={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}