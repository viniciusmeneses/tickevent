import React, { Component } from 'react';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { clearDetails, fetchOrganizer } from '../../store/ducks/detail';
import { addToFavorite, removeFavorite } from '../../store/ducks/favorite';
import { buyTicket } from '../../store/ducks/ticket';

import IconFa from 'react-native-vector-icons/FontAwesome';
import IconFa5 from 'react-native-vector-icons/FontAwesome5';
import IconMd from 'react-native-vector-icons/MaterialIcons';

import Separator from '../../components/Separator';
import Map from '../../components/Map';
import Loading from '../../components/Loading';
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
  MapContainer,
} from './styles';

class Details extends Component {
  static navigationOptions = ({ event }) => ({
    title: event.name,
  });

  componentDidMount() {
    const { fetchOrganizer, event } = this.props;
    fetchOrganizer(event.organizerId);
  }

  componentWillUnmount() {
    const { clearDetails } = this.props;
    clearDetails();
  }

  getCategory = () => {
    const { categories, event } = this.props;
    return categories.find(category => category.id === event.categoryId);
  };

  getFavorite = () => {
    const { favorites, event } = this.props;
    return favorites.find(favorite => favorite.eventId === event.id);
  };

  isTicket = () => {
    const { type } = this.props;
    return type === 'Ticket';
  };

  handleFavorite = favorite => {
    const { addToFavorite, removeFavorite, event } = this.props;
    if (favorite) {
      removeFavorite(favorite.id);
    } else {
      addToFavorite(event);
    }
  };

  buyEventTicket = () => {
    const { buyTicket, event } = this.props;
    buyTicket(event);
  };

  render() {
    const { event, ticket, organizer, isLoading } = this.props;
    const category = this.getCategory();
    const favorite = this.getFavorite();
    if (isLoading) {
      return <Loading />;
    }

    return (
      <Container>
        {!this.isTicket() && (
          <EventBackgroundImage
            source={{
              uri: event.imageUrl,
            }}
          >
            <FavoriteButton onPress={() => this.handleFavorite(favorite)}>
              <IconFa
                name={favorite ? 'heart' : 'heart-o'}
                color="#FF5757"
                size={22}
              />
            </FavoriteButton>
          </EventBackgroundImage>
        )}
        <EventName noMarginTop={this.isTicket()}>{event.name}</EventName>
        <EventDetailContainer>
          <IconFa5 name="calendar-alt" color="#FF5757" size={24} />
          <EventDetailType marginLeft={13}>Data: </EventDetailType>
          <EventDetailText>
            {event.startDateFormatted} até {event.endDateFormatted}
          </EventDetailText>
        </EventDetailContainer>
        <EventDetailContainer>
          <IconMd name="access-time" color="#FF5757" size={24} />
          <EventDetailType marginLeft={10}>Horário: </EventDetailType>
          <EventDetailText>{event.startTimeFormatted}</EventDetailText>
        </EventDetailContainer>
        <EventDetailContainer>
          <IconMd name="people" color="#FF5757" size={24} />
          <EventDetailType marginLeft={9}>Organizador: </EventDetailType>
          <EventDetailText>{organizer.name}</EventDetailText>
        </EventDetailContainer>
        <EventDetailContainer>
          <IconFa name="tag" color="#FF5757" size={24} />
          <EventDetailType marginLeft={12}>Categoria: </EventDetailType>
          <EventDetailText>{category && category.name}</EventDetailText>
        </EventDetailContainer>
        <Separator />
        {this.isTicket() ? (
          <EventDetailContainer noMarginTop>
            <IconFa name="credit-card" color="#FF5757" size={22} />
            <EventDetailType marginLeft={9}>Valor Pago: </EventDetailType>
            <EventDetailText>{ticket.paidValueFormatted}</EventDetailText>
          </EventDetailContainer>
        ) : (
          <TicketPriceContainer>
            <EventDetailContainer noMarginTop>
              <IconFa name="ticket" color="#FF5757" size={24} />
              <TicketPrice marginLeft={8}>
                {event.ticketPriceFormatted}
              </TicketPrice>
            </EventDetailContainer>
            <BuyTicketButton onPress={this.buyEventTicket}>
              <BuyTicketButtonText>Comprar Ingresso</BuyTicketButtonText>
            </BuyTicketButton>
          </TicketPriceContainer>
        )}
        <Separator />
        <EventLocationContainer>
          <IconFa name="location-arrow" color="#FF5757" size={24} />
          <EventLocationTextContainer>
            <EventDetailType>Localização: </EventDetailType>
            <EventDetailText numberOfLines={2}>
              {event.location.address}, {event.location.number}
              {event.location.complement
                ? ` - ${event.location.complement}`
                : null}
            </EventDetailText>
            <EventDetailText numberOfLines={2}>
              {event.location.district}, {event.location.city} -{' '}
              {event.location.state}
            </EventDetailText>
            <EventDetailText>{event.location.zipcode}</EventDetailText>
          </EventLocationTextContainer>
        </EventLocationContainer>
        <MapContainer>
          <Map
            latitude={event.location.latitude}
            longitude={event.location.longitude}
            eventName={event.name}
          />
        </MapContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  organizer: state.details.organizer,
  isLoading: state.details.isLoading,
  categories: state.categories,
  favorites: state.favorite.list,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { clearDetails, fetchOrganizer, addToFavorite, removeFavorite, buyTicket },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withMappedNavigationParams()(Details));
