import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
