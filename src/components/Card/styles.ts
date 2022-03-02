import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled(Animatable.View)`
  align-items: center;

  width: 200px;
  height: 270px;
  margin: 0 10px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.RED_800};
`;

export const Image = styled(Animatable.Image)`
  width: 220px;
  height: 150px;
  margin-top: -50px;
  margin-left: -15px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: ${RFPercentage(3)}px;

  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const BirthPlace = styled.Text`
  margin-top: 8px;
  font-size: ${RFPercentage(2.2)}px;

  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;
