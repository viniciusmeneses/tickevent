import React from 'react';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import IconMd from 'react-native-vector-icons/MaterialIcons';

import Separator from '../../components/Separator';
import {
  Container,
  EventName,
  EventBackgroundImage,
  FavoriteButton,
  EventDetailContainer,
  EventDetailType,
  EventDetailText,
  TicketPriceContainer,
  TicketPrice,
  BuyTicketButton,
  BuyTicketButtonText,
  EventLocationContainer,
  EventLocationTextContainer,
} from './styles';

export default function Details() {
  return (
    <Container>
      <EventBackgroundImage
        source={{
          uri:
            'https://res.cloudinary.com/practicaldev/image/fetch/s--ZmPcIbAW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dzone.com/storage/temp/12334613-971.jpg',
        }}
      >
        <FavoriteButton>
          <IconFa name="heart-o" color="#fff" size={32} />
        </FavoriteButton>
      </EventBackgroundImage>
      <EventName>Treinamento UI e UX</EventName>
      <EventDetailContainer>
        <IconFa5 name="calendar-alt" color="#FF5757" size={24} />
        <EventDetailType marginLeft={13}>Data: </EventDetailType>
        <EventDetailText>27/07/2020 até 28/07/2020</EventDetailText>
      </EventDetailContainer>
      <EventDetailContainer>
        <IconMd name="access-time" color="#FF5757" size={24} />
        <EventDetailType marginLeft={10}>Horário: </EventDetailType>
        <EventDetailText>10:00H</EventDetailText>
      </EventDetailContainer>
      <EventDetailContainer>
        <IconMd name="people" color="#FF5757" size={24} />
        <EventDetailType marginLeft={9}>Organizador: </EventDetailType>
        <EventDetailText>Amazon.com, Inc.</EventDetailText>
      </EventDetailContainer>
      <EventDetailContainer>
        <IconFa name="tag" color="#FF5757" size={24} />
        <EventDetailType marginLeft={12}>Categoria: </EventDetailType>
        <EventDetailText>Tecnologia</EventDetailText>
      </EventDetailContainer>
      <Separator />
      <TicketPriceContainer>
        <EventDetailContainer noMarginTop>
          <IconFa name="ticket" color="#FF5757" size={24} />
          <TicketPrice marginLeft={8}>R$ 29,99</TicketPrice>
        </EventDetailContainer>
        <BuyTicketButton>
          <BuyTicketButtonText>Comprar Ingresso</BuyTicketButtonText>
        </BuyTicketButton>
      </TicketPriceContainer>
      <Separator />
      <EventLocationContainer>
        <IconFa name="location-arrow" color="#FF5757" size={24} />
        <EventLocationTextContainer>
          <EventDetailType>Localizacão: </EventDetailType>
          <EventDetailText numberOfLines={2}>
            Av. Dr. Mário Vilas Boas Rodrigues, 387
          </EventDetailText>
          <EventDetailText numberOfLines={2}>
            Santo Amaro, São Paulo - SP
          </EventDetailText>
          <EventDetailText>04757-020</EventDetailText>
        </EventLocationTextContainer>
      </EventLocationContainer>
    </Container>
  );
}
