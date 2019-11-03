import React from 'react';
import { withNavigation } from 'react-navigation';

import {
  Container,
  TextContainer,
  BackgroundImage,
  EventName,
  EventDetails,
} from './styles';
import { TouchableOpacity } from 'react-native';

function FeaturedCard({ navigation, event }) {
  const navigateToEvent = () => navigation.navigate('EventDetails', { event });

  return (
    <Container>
      <TouchableOpacity onPress={navigateToEvent}>
        <BackgroundImage
          source={{
            uri: event.imageUrl,
          }}
        >
          <TextContainer>
            <EventName numberOfLines={2}>{event.name}</EventName>
            <EventDetails>
              {event.startDateFormatted} - {event.startTimeFormatted}
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

export default withNavigation(FeaturedCard);
