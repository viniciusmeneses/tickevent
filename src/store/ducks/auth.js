export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_ERROR: 'auth/LOGIN_ERROR',
  LOAD_USER_DATA: 'auth/LOAD_USER_DATA',
  LOAD_USER_DATA_SUCCESS: 'auth/LOAD_USER_DATA_SUCCESS',
};

export const login = (email, password) => ({
  type: Types.LOGIN,
  payload: {
    email,
    password,
  },
});

export const loginSuccess = token => ({
  type: Types.LOGIN_SUCCESS,
  payload: {
    token,
  },
});

export const loginError = () => ({
  type: Types.LOGIN_ERROR,
});

export const loadUserData = token => ({
  type: Types.LOAD_USER_DATA,
  payload: {
    token,
  },
});

export const loadUserDataSuccess = user => ({
  type: Types.LOAD_USER_DATA_SUCCESS,
  payload: {
    user,
  },
});

const initialState = {
  token: null,
  user: {},
  isLogging: false,
  isRegistering: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, isLogging: true };
    case Types.LOGIN_SUCCESS:
      return { ...state, token: action.payload.token };
    case Types.LOGIN_ERROR:
      return { ...state, isLogging: false };
    case Types.LOAD_USER_DATA_SUCCESS:
      return { ...state, user: action.payload.user, isLogging: false };
    default:
      return state;
  }
}
