import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fbfbfb;
  padding-left: 15px;
  padding-bottom: 7px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding: 15px 20px 0 0;
`;

export const FeaturedList = styled.FlatList.attrs({
  horizontal: true,
})`
  flex-grow: 0;
  padding-bottom: 7px;
  margin-top: 7px;
  min-height: 170px;
  max-height: 170px;
`;

export const EventList = styled.FlatList`
  background-color: #fbfbfb;
`;

export const LoadingContainer = styled.View`
  width: ${Dimensions.get('window').width - 30};
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#ff5757',
  size: 38,
})``;
