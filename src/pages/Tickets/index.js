import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadTickets } from '../../store/ducks/ticket';
import { normalizeEvent, normalizeTicket } from '../../utils';

import TicketCard from '../../components/TicketCard';
import ListTitle from '../../components/ListTitle';
import Loading from '../../components/Loading';
import { Container, TicketList } from './styles';

class Tickets extends Component {
  componentDidMount() {
    const { loadTickets } = this.props;
    loadTickets();
  }

  renderLoading = isLoading => {
    if (!isLoading) {
      return null;
    }
    return <Loading />;
  };

  render() {
    const { list, isLoading } = this.props;
    return (
      <>
        <Container>
          <ListTitle>Meus Ingressos</ListTitle>
        </Container>
        {isLoading ? (
          <Loading />
        ) : (
          <TicketList
            data={list}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item: { event, ...ticket } }) => (
              <TicketCard ticket={ticket} event={event} />
            )}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  list: state.ticket.list.map(ticket => ({
    ...normalizeTicket(ticket),
    event: normalizeEvent(ticket.event),
  })),
  isLoading: state.ticket.isLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadTickets }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tickets);
