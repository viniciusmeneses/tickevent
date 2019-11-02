import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fbfbfb;
  padding-left: 15px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  background-color: #fbfbfb;
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

export const EventList = styled.FlatList.attrs({
  ListHeaderComponentStyle: {
    paddingBottom: 7,
  },
})`
  background-color: #fbfbfb;
`;
