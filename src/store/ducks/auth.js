export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOAD_USER_DATA: 'auth/LOAD_USER_DATA',
  LOAD_USER_DATA_SUCCESS: 'auth/LOAD_USER_DATA_SUCCESS',
};

export const login = (email, password) => ({
  type: Types.LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginSuccess = jwtToken => ({
  type: Types.LOGIN_SUCCESS,
  payload: {
    jwtToken,
  },
});

export const loadUserData = jwtToken => ({
  type: Types.LOAD_USER_DATA,
  payload: {
    jwtToken,
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
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return { ...state, token: action.payload.jwtToken };
    case Types.LOAD_USER_DATA_SUCCESS:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
}
