import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

import Logo from '../../components/Logo';
import FeaturedCard from '../../components/FeaturedCard';
import Card from '../../components/Card';
import Separator from '../../components/Separator';
import ListTitle from '../../components/ListTitle';
import { Container, HeaderContainer, FeaturedList, EventList } from './styles';

class Home extends Component {
  navigateToSearch = () => {
    const { navigation } = this.props;
    navigation.navigate('Search');
  };

  render() {
    return (
      <EventList
        data={[1, 2, 3]}
        keyExtractor={i => i.toString()}
        ListHeaderComponent={
          <Container>
            <HeaderContainer>
              <Logo horizontal={true} />
              <TouchableOpacity onPress={this.navigateToSearch}>
                <Icon name="search" color="#ff5757" size={30} />
              </TouchableOpacity>
            </HeaderContainer>
            <Separator marginRight={true} />
            <ListTitle>Destaques</ListTitle>
            <FeaturedList
              data={[1, 2]}
              keyExtractor={i => i.toString()}
              renderItem={() => (
                <FeaturedCard
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
            <Separator marginRight={true} />
            <ListTitle>Próximos Eventos</ListTitle>
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
              ticketPrice: 'R$ 59,99',
            }}
          />
        )}
      />
    );
  }
}

export default Home;
