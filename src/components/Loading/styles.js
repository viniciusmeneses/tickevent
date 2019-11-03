import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: ${Dimensions.get('window').width - 30};
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator.attrs({
  color: '#ff5757',
  size: 38,
})``;
