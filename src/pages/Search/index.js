import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Separator from '../../components/Separator';
import ListTitle from '../../components/ListTitle';
import {
  Container,
  SearchContainer,
  SearchButton,
  SearchImage,
  SearchImageContainer,
} from './styles';

export default class Search extends Component {
  state = {
    name: '',
    category: '',
  };
  render() {
    const { name, category } = this.state;
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
          <SearchButton>
            <Icon name="search" color="#fff" size={24} />
          </SearchButton>
        </SearchContainer>
        <Separator />
        <SearchImageContainer>
          <SearchImage />
        </SearchImageContainer>
      </Container>
    );
  }
}
