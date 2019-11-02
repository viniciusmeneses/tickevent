import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fbfbfb;
  padding-top: 12px;
`;

export const EventList = styled.FlatList.attrs({
  ListHeaderComponentStyle: {
    paddingBottom: 7,
  },
})`
  padding: 0 15px 0 15px;
  background-color: #fbfbfb;
`;
