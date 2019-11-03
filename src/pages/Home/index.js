import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { loadEvents, loadFeaturedEvents } from '../../store/ducks/event';
import { loadCategories } from '../../store/ducks/category';
import { logout } from '../../store/ducks/auth';
import { normalizeEvent } from '../../utils';

import Logo from '../../components/Logo';
import FeaturedCard from '../../components/FeaturedCard';
import Card from '../../components/Card';
import Separator from '../../components/Separator';
import ListTitle from '../../components/ListTitle';
import Loading from '../../components/Loading';
import {
  Container,
  HeaderContainer,
  FeaturedList,
  EventList,
  LogoutButton,
  SearchButton,
} from './styles';

class Home extends Component {
  componentDidMount() {
    const { loadEvents, loadFeaturedEvents, loadCategories } = this.props;
    loadEvents();
    loadFeaturedEvents();
    loadCategories();
  }

  navigateToSearch = () => {
    const { navigation } = this.props;
    navigation.navigate('Search');
  };

  navigateToLogin = () => {
    const { navigation, logout } = this.props;
    logout();
    navigation.navigate('Login');
  };

  renderLoading = isLoading => {
    if (!isLoading) {
      return null;
    }
    return <Loading />;
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
              <SearchButton onPress={this.navigateToSearch}>
                <Icon name="search" color="#ff5757" size={28} />
              </SearchButton>
              <LogoutButton onPress={this.navigateToLogin}>
                <Icon name="sign-out" color="#ff5757" size={32} />
              </LogoutButton>
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
  bindActionCreators(
    { loadEvents, loadFeaturedEvents, loadCategories, logout },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
