import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  padding: 15px;
`;

export const EventBackgroundImage = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 6,
  },
})`
  width: 100%;
  height: 250px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10;
  right: 10;
  background-color: #fff;
  padding: 6px;
  padding-top: 7px;
  border-radius: 100px;
  border: 1px solid #ff5757;
`;

export const EventName = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 26px;
  color: #333;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? 0 : '10px')};
`;

export const EventDetailContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ noMarginTop }) => (noMarginTop ? 0 : '5px')};
`;

export const EventDetailType = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 17px;
  color: #333;
  margin-left: ${({ marginLeft }) => `${marginLeft || 0}px`};
`;

export const EventDetailText = styled.Text`
  font-family: 'Roboto';
  font-size: 17px;
  color: #333;
`;

export const TicketPriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TicketPrice = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 23px;
  color: #333;
  margin-left: ${({ marginLeft }) => `${marginLeft || 0}px`};
`;

export const BuyTicketButton = styled.TouchableOpacity`
  background-color: #ff5757;
  padding: 10px 15px;
  border-radius: 6px;
`;

export const BuyTicketButtonText = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 17px;
  color: #fff;
  text-transform: uppercase;
`;

export const EventLocationContainer = styled.View`
  flex-direction: row;
`;

export const EventLocationTextContainer = styled.View`
  margin-left: 13px;
`;

export const MapContainer = styled.View`
  width: ${Dimensions.get('window').width - 30};
  height: 250px;
  border-radius: 6px;
  margin-bottom: 30px;
  margin-top: 10px;
`;
