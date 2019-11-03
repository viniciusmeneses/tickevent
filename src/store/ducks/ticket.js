export const Types = {
  LOAD: 'ticket/LOAD',
  LOAD_SUCCESS: 'ticket/LOAD_SUCCESS',
  BUY: 'ticket/BUY',
  BUY_SUCCESS: 'ticket/BUY_SUCCESS',
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

export const buyTicket = event => ({
  type: Types.BUY,
  payload: {
    event,
  },
});

export const buyTicketSuccess = ticket => ({
  type: Types.BUY_SUCCESS,
  payload: {
    ticket,
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
    case Types.BUY_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.ticket],
      };
    default:
      return state;
  }
}
