export const Types = {
  LOAD: 'event/LOAD',
  LOAD_SUCCESS: 'event/LOAD_SUCCESS',
  LOAD_FEATURED: 'event/LOAD_FEATURED',
  LOAD_FEATURED_SUCCESS: 'event/LOAD_FEATURED_SUCCESS',
  SEARCH: 'event/SEARCH',
  SEARCH_SUCCESS: 'event/SEARCH_SUCCESS',
};

export const loadEvents = () => ({
  type: Types.LOAD,
});

export const loadEventsSuccess = events => ({
  type: Types.LOAD_SUCCESS,
  payload: {
    events,
  },
});

export const loadFeaturedEvents = () => ({
  type: Types.LOAD_FEATURED,
});

export const loadFeaturedEventsSuccess = events => ({
  type: Types.LOAD_FEATURED_SUCCESS,
  payload: {
    events,
  },
});

export const searchEvents = searchParams => ({
  type: Types.SEARCH,
  payload: searchParams,
});

export const searchEventsSuccess = events => ({
  type: Types.SEARCH_SUCCESS,
  payload: {
    events,
  },
});

const initialState = {
  list: [],
  featuredList: [],
  isLoading: true,
  isLoadingFeatured: true,
  search: {
    list: [],
    isSearching: false,
  },
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
        list: [...state.list, ...action.payload.events],
      };
    case Types.LOAD_FEATURED:
      return {
        ...state,
        isLoadingFeatured: true,
      };
    case Types.LOAD_FEATURED_SUCCESS:
      return {
        ...state,
        isLoadingFeatured: false,
        featuredList: [...state.featuredList, ...action.payload.events],
      };
    case Types.SEARCH:
      return {
        ...state,
        search: { ...state.search, isSearching: true },
      };
    case Types.SEARCH_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          isSearching: false,
          list: action.payload.events,
        },
      };
    default:
      return state;
  }
}
