import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import SearchDraw from '../../assets/searchDraw.png';

export const Container = styled.View`
  padding: 15px 15px 0 15px;
  flex: 1;
  background-color: #fbfbfb;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #ff5757;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  height: 49px;
  margin-left: 10px;
  width: 60px;
`;

export const SearchImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const SearchImage = styled.Image.attrs({
  source: SearchDraw,
})`
  height: ${Dimensions.get('window').width / 1.5};
  width: ${Dimensions.get('window').width / 1.5};
`;
