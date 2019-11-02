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
  padding: 15px 20px 15px 0;
`;

export const Separator = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #dfdfdf;
  margin: ${({ header }) => (header ? 0 : '15px')} 15px 15px 0;
`;

export const ListTitle = styled.Text`
  color: #333;
  font-family: 'Roboto';
  font-size: 24px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-weight: bold;
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
