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

function FeaturedCard({
  navigation,
  event: { id, imageUrl, name, startDate, startTime, city, state },
}) {
  const navigateToEvent = () =>
    navigation.navigate('EventDetails', { eventId: id });

  return (
    <Container>
      <TouchableOpacity onPress={navigateToEvent}>
        <BackgroundImage
          source={{
            uri: imageUrl,
          }}
        >
          <TextContainer>
            <EventName numberOfLines={2}>{name}</EventName>
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

export default withNavigation(FeaturedCard);
