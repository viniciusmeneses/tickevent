import React, { Component } from 'react';

import Card from '../../components/Card';
import ListTitle from '../../components/ListTitle';
import { Container, EventList } from './styles';

class Favorites extends Component {
  render() {
    return (
      <EventList
        data={[1, 2, 3]}
        keyExtractor={i => i.toString()}
        ListHeaderComponent={
          <Container>
            <ListTitle>Meus Favoritos</ListTitle>
          </Container>
        }
        renderItem={() => (
          <Card
            event={{
              imageUrl:
                'https://res.cloudinary.com/practicaldev/image/fetch/s--ZmPcIbAW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dzone.com/storage/temp/12334613-971.jpg',
              name: 'Treinamento UI e UX',
              startDate: '23/06/2001',
              startTime: '15:30',
              city: 'Campinas',
              state: 'SP',
            }}
          />
        )}
      />
    );
  }
}

export default Favorites;
