import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, View, Text } from 'react-native';

import { loadEvents, loadFeaturedEvents } from '../../store/ducks/event';

import Logo from '../../components/Logo';
import FeaturedCard from '../../components/FeaturedCard';
import Card from '../../components/Card';
import Separator from '../../components/Separator';
import ListTitle from '../../components/ListTitle';
import {
  Container,
  HeaderContainer,
  FeaturedList,
  EventList,
  Loading,
  LoadingContainer,
  LoadingFeaturedContainer,
} from './styles';
import { normalizeEvent } from '../../utils';

class Home extends Component {
  componentDidMount() {
    const { loadEvents, loadFeaturedEvents } = this.props;
    loadEvents();
    loadFeaturedEvents();
  }

  navigateToSearch = () => {
    const { navigation } = this.props;
    navigation.navigate('Search');
  };

  renderLoading = isLoading => {
    if (!isLoading) {
      return null;
    }
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );
  };

  render() {
    const { isLoading, isLoadingFeatured, list, featuredList } = this.props;

    return (
      <EventList
        data={list}
        keyExtractor={item => item.id.toString()}
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
              data={featuredList}
              keyExtractor={item => item.id.toString()}
              ListEmptyComponent={this.renderLoading(isLoadingFeatured)}
              renderItem={({ item }) => <FeaturedCard event={item} />}
            />
            <Separator marginRight={true} />
            <ListTitle>Próximos Eventos</ListTitle>
            {this.renderLoading(isLoading)}
          </Container>
        }
        renderItem={({ item }) => <Card event={item} />}
      />
    );
  }
}

const mapStateToProps = state => ({
  list: state.event.list.map(normalizeEvent),
  featuredList: state.event.featuredList.map(normalizeEvent),
  isLoading: state.event.isLoading,
  isLoadingFeatured: state.event.isLoadingFeatured,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadEvents, loadFeaturedEvents }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
