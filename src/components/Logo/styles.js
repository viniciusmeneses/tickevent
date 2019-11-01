import styled from 'styled-components/native';

export const LogoContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 32px;
  color: ${props => props.color || '#333'};
  margin-top: 5px;
`;
