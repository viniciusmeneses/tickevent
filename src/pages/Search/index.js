import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Separator from '../../components/Separator';
import ListTitle from '../../components/ListTitle';
import Card from '../../components/Card';
import {
  Container,
  SearchContainer,
  SearchButton,
  SearchImage,
  SearchImageContainer,
  EventList,
  EventListHeaderContainer,
} from './styles';

export default class Search extends Component {
  state = {
    name: '',
    category: '',
    showResult: false,
  };
  render() {
    const { name, category, showResult } = this.state;
    return (
      <Container>
        <SearchContainer>
          <Input
            fullWidth
            placeholder="Nome"
            onChangeText={text => this.setState({ name: text })}
            value={name}
            returnKeyType="search"
          />
          <Select
            items={[{ label: 'txt', value: 'txt' }]}
            value={category}
            placeholder={{ label: 'Categoria', value: null }}
            onValueChange={value => this.setState({ category: value })}
          />
          <SearchButton onPress={() => this.setState({ showResult: true })}>
            <Icon name="search" color="#fff" size={24} />
          </SearchButton>
        </SearchContainer>
        <Separator marginLeft marginRight />
        {showResult ? (
          <EventList
            data={[1, 2, 3]}
            keyExtractor={i => i.toString()}
            ListHeaderComponent={
              <EventListHeaderContainer>
                <ListTitle>Eventos Encontrados</ListTitle>
              </EventListHeaderContainer>
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
        ) : (
          <SearchImageContainer>
            <SearchImage />
          </SearchImageContainer>
        )}
      </Container>
    );
  }
}
