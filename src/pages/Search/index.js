import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { searchEvents } from '../../store/ducks/event';
import { normalizeEvent } from '../../utils';
import toastService from '../../services/toast';

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

class Search extends Component {
  state = {
    name: '',
    categoryId: '',
  };

  getSelectItems = () => {
    const { categories } = this.props;
    return categories.map(({ id, name }) => ({ label: name, value: id }));
  };

  handleSearch = () => {
    const { name, categoryId } = this.state;
    const { searchEvents } = this.props;
    if (!name && !categoryId) {
      return toastService.show('Preencha algum filtro');
    }
    Keyboard.dismiss();
    searchEvents({ name, categoryId });
  };

  render() {
    const { name, categoryId } = this.state;
    const { list, isSearching } = this.props;

    return (
      <Container>
        <SearchContainer>
          <Input
            fullWidth
            placeholder="Nome"
            onChangeText={text => this.setState({ name: text })}
            value={name}
            returnKeyType="search"
            onSubmitEditing={this.handleSearch}
          />
          <Select
            items={this.getSelectItems()}
            value={categoryId}
            placeholder={{ label: 'Categoria', value: null }}
            onValueChange={value => this.setState({ categoryId: value })}
          />
          <SearchButton onPress={this.handleSearch}>
            {isSearching ? (
              <ActivityIndicator color="#fff" size={24} />
            ) : (
              <Icon name="search" color="#fff" size={24} />
            )}
          </SearchButton>
        </SearchContainer>
        <Separator marginLeft marginRight />
        {list.length ? (
          <EventList
            data={list}
            key={list.length}
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={
              <EventListHeaderContainer>
                <ListTitle>Eventos Encontrados</ListTitle>
              </EventListHeaderContainer>
            }
            renderItem={({ item }) => <Card event={item} />}
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

const mapStateToProps = state => ({
  list: state.event.search.list.map(normalizeEvent),
  isSearching: state.event.search.isSearching,
  categories: state.categories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchEvents }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
