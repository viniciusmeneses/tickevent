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

function Card({ navigation, event }) {
  const navigateToEvent = () => navigation.navigate('EventDetails', { event });
  return (
    <Container>
      <TouchableOpacity onPress={navigateToEvent}>
        <Image
          source={{
            uri: event.imageUrl,
          }}
        />
        <TextContainer>
          <EventName numberOfLines={1}>{event.name}</EventName>

          <EventContainer>
            <EventDetailsContainer>
              <EventDetailsIconContainer>
                <Icon name="calendar-alt" color="#ff5757" size={14} />
                <EventDetails>
                  {event.startDateFormatted} - {event.startTimeFormatted}
                </EventDetails>
              </EventDetailsIconContainer>

              <EventDetailsIconContainer>
                <Icon name="map-marker-alt" color="#ff5757" size={14} />
                <EventDetails>
                  {event.location.city} / {event.location.state}
                </EventDetails>
              </EventDetailsIconContainer>
            </EventDetailsContainer>
            <EventTicketPrice>{event.ticketPriceFormatted}</EventTicketPrice>
          </EventContainer>
        </TextContainer>
      </TouchableOpacity>
    </Container>
  );
}

export default withNavigation(Card);
