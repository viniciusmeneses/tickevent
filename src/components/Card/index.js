import React from 'react';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  TextContainer,
  Image,
  EventName,
  EventContainer,
  EventDetailsContainer,
  EventDetails,
  EventTicketPrice,
  EventDetailsIconContainer,
} from './styles';
import { TouchableOpacity } from 'react-native';

function Card({
  navigation,
  event: { id, imageUrl, name, startDate, startTime, city, state, ticketPrice },
}) {
  const navigateToEvent = () =>
    navigation.navigate('EventDetails', { eventId: id });

  return (
    <Container>
      <TouchableOpacity onPress={navigateToEvent}>
        <Image
          source={{
            uri: imageUrl,
          }}
        />
        <TextContainer>
          <EventName numberOfLines={1}>{name}</EventName>

          <EventContainer>
            <EventDetailsContainer>
              <EventDetailsIconContainer>
                <Icon name="calendar-alt" color="#ff5757" size={14} />
                <EventDetails>
                  {startDate} - {startTime}
                </EventDetails>
              </EventDetailsIconContainer>

              <EventDetailsIconContainer>
                <Icon name="map-marker-alt" color="#ff5757" size={14} />
                <EventDetails>
                  {city} / {state}
                </EventDetails>
              </EventDetailsIconContainer>
            </EventDetailsContainer>
            <EventTicketPrice>R$ 56,99</EventTicketPrice>
          </EventContainer>
        </TextContainer>
      </TouchableOpacity>
    </Container>
  );
}

export default withNavigation(Card);
