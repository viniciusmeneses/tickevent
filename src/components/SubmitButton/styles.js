import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Button = styled.TouchableOpacity`
  background-color: #ff5757;
  padding: 18px 0;
  border-radius: 6px;
  margin-top: 30px;
  width: ${Dimensions.get('window').width / 2};
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto';
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;
