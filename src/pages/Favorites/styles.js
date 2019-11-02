import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fbfbfb;
  padding: 12px 15px 0 15px;
`;

export const EventList = styled.FlatList.attrs({
  ListHeaderComponentStyle: {
    paddingBottom: 7,
  },
})`
  background-color: #fbfbfb;
`;
