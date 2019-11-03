export const Types = {
  LOAD: 'ticket/LOAD',
  LOAD_SUCCESS: 'ticket/LOAD_SUCCESS',
};

export const loadTickets = () => ({
  type: Types.LOAD,
});

export const loadTicketsSuccess = tickets => ({
  type: Types.LOAD_SUCCESS,
  payload: {
    tickets,
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
        list: action.payload.tickets,
      };
    default:
      return state;
  }
}
