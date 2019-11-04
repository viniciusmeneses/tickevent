import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadFavorites } from '../../store/ducks/favorite';
import { normalizeEvent } from '../../utils';

import Card from '../../components/Card';
import ListTitle from '../../components/ListTitle';
import Loading from '../../components/Loading';
import { Container, FavoriteList } from './styles';

function Favorites({ list, isLoading }) {
  return (
    <>
      <Container>
        <ListTitle>Meus Favoritos</ListTitle>
      </Container>
      {isLoading ? (
        <Loading />
      ) : (
        <FavoriteList
          data={list}
          key={list.length}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Card event={item.event} />}
        />
      )}
    </>
  );
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
