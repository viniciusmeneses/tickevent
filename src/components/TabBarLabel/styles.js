import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 17;
  color: ${props => props.color};
  text-transform: uppercase;
  font-weight: ${props => (props.active ? '700' : '300')};
  font-family: 'Roboto';
`;
