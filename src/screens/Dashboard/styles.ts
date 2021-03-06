import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage,  RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  /** background-color: ${( props ) => props.theme.colors.primary }; */
  background-color: ${({ theme }) => theme.colors.background };
`;

/**
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold };
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
`;**/

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserInfoContainer = styled.View`
  width: 100%;
  
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme}) => theme.colors.shape};
  
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

`;

export const UserName = styled.Text`
  color: ${({ theme}) => theme.colors.shape};
  
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCardsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;
