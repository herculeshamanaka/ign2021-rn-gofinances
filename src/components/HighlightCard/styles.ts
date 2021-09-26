import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface CardProps {
  cardType: 'income' | 'expense' | 'total';
}

export const Container = styled.View<CardProps>`
  background-color: ${({ theme }) => theme.colors.shape};

  ${({ cardType }) => cardType === 'total' && css`
    background-color: ${({ theme }) => theme.colors.secondary}
  `};

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: ${RFValue(16)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text<CardProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text_dark};

  ${({ cardType }) => cardType === 'total' && css`
    color: ${({ theme }) => theme.colors.shape}
  `};

`;

export const Icon = styled(Feather)<CardProps>`
  font-size: ${RFValue(40)}px;

  ${({ cardType }) => cardType === 'income' && css`
    color: ${({ theme }) => theme.colors.success}
  `};

  ${({ cardType }) => cardType === 'expense' && css`
    color: ${({ theme }) => theme.colors.attention}
  `};

  ${({ cardType }) => cardType === 'total' && css`
    color: ${({ theme }) => theme.colors.shape}
  `};
`;

export const Footer = styled.View`
`;

export const Amount = styled.Text<CardProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  ${({ cardType }) => cardType === 'total' && css`
    color: ${({ theme }) => theme.colors.shape}
  `};

  margin-top: 38px;
`;

export const LastTransaction = styled.Text<CardProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.text};
  
  ${({ cardType }) => cardType === 'total' && css`
    color: ${({ theme }) => theme.colors.shape}
  `};
`;

