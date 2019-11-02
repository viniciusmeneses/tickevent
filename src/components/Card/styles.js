import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
  margin: 0 15px 10px 15px;
  background-color: #fff;
  border-radius: 6px;
  padding: 0;
`;

export const Image = styled.Image`
  width: 100%;
  height: 180px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0;
`;

export const TextContainer = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 5px 10px 10px 10px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-bottom-color: #dfdfdf;
  border-left-width: 1px;
  border-left-color: #dfdfdf;
  border-right-width: 1px;
  border-right-color: #dfdfdf;
`;

export const EventName = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 22px;
  color: #333;
`;

export const EventContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EventDetailsContainer = styled.View``;

export const EventDetailsIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EventDetails = styled.Text`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 14px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 5px;
`;

export const EventTicketPrice = styled.Text`
  color: #ff5757;
  font-family: 'Roboto';
  font-size: 19px;
`;
