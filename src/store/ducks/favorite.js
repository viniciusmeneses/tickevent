export const Types = {
  LOAD: 'favorite/LOAD',
  LOAD_SUCCESS: 'favorite/LOAD_SUCCESS',
  ADD: 'favorite/ADD',
  ADD_SUCCESS: 'favorite/ADD_SUCCESS',
  REMOVE: 'favorite/REMOVE',
  REMOVE_SUCCESS: 'favorite/REMOVE_SUCCESS',
};

export const loadFavorites = () => ({
  type: Types.LOAD,
});

export const loadFavoritesSuccess = favorites => ({
  type: Types.LOAD_SUCCESS,
  payload: {
    favorites,
  },
});

export const addToFavorite = event => ({
  type: Types.ADD,
  payload: {
    event,
  },
});

export const addToFavoriteSuccess = favorite => ({
  type: Types.ADD_SUCCESS,
  payload: {
    favorite,
  },
});

export const removeFavorite = favoriteId => ({
  type: Types.REMOVE,
  payload: {
    favoriteId,
  },
});

export const removeFavoriteSuccess = favoriteId => ({
  type: Types.REMOVE_SUCCESS,
  payload: {
    favoriteId,
  },
});

const initialState = {
  list: [],
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.favorites,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.favorite],
      };
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(
          favorite => favorite.id !== action.payload.favoriteId
        ),
      };
    default:
      return state;
  }
}
