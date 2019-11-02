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

function TicketCard({
  navigation,
  event: { id, imageUrl, name, startDate, startTime, city, state },
}) {
  const navigateToEvent = () =>
    navigation.navigate('TicketDetails', { eventId: id });

  return (
    <Container>
      <TouchableOpacity onPress={navigateToEvent}>
        <BackgroundImage
          source={{
            uri: imageUrl,
          }}
        >
          <TextContainer>
            <EventNameContainer>
              <Icon name="ticket" color="#FF5757" size={30} />
              <EventName numberOfLines={2}>{name}</EventName>
            </EventNameContainer>
            <EventDetails>
              {startDate} - {startTime}
            </EventDetails>
            <EventDetails>
              {city} / {state}
            </EventDetails>
          </TextContainer>
        </BackgroundImage>
      </TouchableOpacity>
    </Container>
  );
}

export default withNavigation(TicketCard);
