import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import {
  Container,
  TextContainer,
  BackgroundImage,
  EventName,
  EventDetails,
  EventNameContainer,
} from './styles';
import { TouchableOpacity } from 'react-native';

function TicketCard({ navigation, ticket, event }) {
  const navigateToEvent = () =>
    navigation.navigate('TicketDetails', { ticket, event });

  return (
    <Container>
      <TouchableOpacity onPress={navigateToEvent}>
        <BackgroundImage
          source={{
            uri: event.imageUrl,
          }}
        >
          <TextContainer>
            <EventNameContainer>
              <Icon name="ticket" color="#FF5757" size={30} />
              <EventName numberOfLines={2}>{event.name}</EventName>
            </EventNameContainer>
            <EventDetails>
              {event.startDateFormatted} - {event.startTime}
            </EventDetails>
            <EventDetails>
              {event.location.city} / {event.location.state}
            </EventDetails>
          </TextContainer>
        </BackgroundImage>
      </TouchableOpacity>
    </Container>
  );
}

export default withNavigation(TicketCard);
