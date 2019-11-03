export const Types = {
  LOAD: 'favorite/LOAD',
  LOAD_SUCCESS: 'favorite/LOAD_SUCCESS',
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
        list: [...state.list, ...action.payload.favorites],
      };
    default:
      return state;
  }
}
