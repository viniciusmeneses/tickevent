export const Types = {
  CLEAR: 'detail/CLEAR',
  FETCH_ORGANIZER: 'detail/FETCH_ORGANIZER',
  FETCH_ORGANIZER_SUCCESS: 'detail/FETCH_ORGANIZER_SUCCESS',
};

export const clearDetails = () => ({
  type: Types.CLEAR,
});

export const fetchOrganizer = organizerId => ({
  type: Types.FETCH_ORGANIZER,
  payload: {
    organizerId,
  },
});

export const fetchOrganizerSuccess = organizer => ({
  type: Types.FETCH_ORGANIZER_SUCCESS,
  payload: {
    organizer,
  },
});

const initialState = {
  organizer: {},
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_ORGANIZER:
      return {
        ...state,
        isLoading: true,
      };
    case Types.FETCH_ORGANIZER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        organizer: action.payload.organizer,
      };
    case Types.CLEAR:
      return initialState;
    default:
      return state;
  }
}
