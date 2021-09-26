import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';


import { 
  Container, 
  Header,
  UserInfoContainer,
  UserInfo,
  UserAvatar,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCardsContainer
 } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserInfoContainer>
          <UserInfo>
            <UserAvatar source={{ uri: 'https://avatars.githubusercontent.com/u/33010639?s=40&v=4' }} />
            <User>
              <UserGreeting>Hi,</UserGreeting>
              <UserName>Hercules.</UserName>
            </User>
          </UserInfo>       
          <Icon name="power" />
        </UserInfoContainer>        
      </Header>
      
      <HighlightCardsContainer>
        <HighlightCard 
          type="income"
          title="Income"           
          amount="17,400.00" 
          lastTransaction="Last transaction on April 03"
        />
        <HighlightCard 
          type="expense"
          title="Outcome"           
          amount="1,259.00" 
          lastTransaction="Last transaction on April 13"
        />
        <HighlightCard 
          type="total"
          title="Total"           
          amount="16,141.00" 
          lastTransaction="Last transaction on April 13"
        />

      </HighlightCardsContainer>      
    </Container>
  );
}