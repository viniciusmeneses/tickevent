import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadFavorites } from '../../store/ducks/favorite';
import { normalizeEvent } from '../../utils';

import Card from '../../components/Card';
import ListTitle from '../../components/ListTitle';
import Loading from '../../components/Loading';
import { Container, FavoriteList } from './styles';

class Favorites extends Component {
  componentDidMount() {
    const { loadFavorites } = this.props;
    loadFavorites();
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
      <FavoriteList
        data={list}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <Container>
            <ListTitle>Meus Favoritos</ListTitle>
            {this.renderLoading(isLoading)}
          </Container>
        }
        renderItem={({ item }) => <Card event={item.event} />}
      />
    );
  }
}

const mapStateToProps = state => ({
  list: state.favorite.list.map(favorite => ({
    ...favorite,
    event: normalizeEvent(favorite.event),
  })),
  isLoading: state.favorite.isLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadFavorites }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
