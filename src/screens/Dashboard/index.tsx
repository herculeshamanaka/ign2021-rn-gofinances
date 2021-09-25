import React from 'react';


import { 
  Container, 
  Header,
  UserInfoContainer,
  UserInfo,
  UserAvatar,
  User,
  UserGreeting,
  UserName,
  Icon
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
    </Container>
  );
}