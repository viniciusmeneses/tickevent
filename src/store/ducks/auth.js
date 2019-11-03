export const Types = {
  LOGIN: 'auth/LOGIN',
  REGISTER: 'auth/REGISTER',
  AUTH_SUCCESS: 'auth/AUTH_SUCCESS',
  AUTH_ERROR: 'auth/AUTH_ERROR',
  LOAD_USER_DATA: 'auth/LOAD_USER_DATA',
  LOAD_USER_DATA_SUCCESS: 'auth/LOAD_USER_DATA_SUCCESS',
  LOGOUT: 'auth/LOGOUT',
};

export const login = (email, password) => ({
  type: Types.LOGIN,
  payload: {
    email,
    password,
  },
});

export const register = (name, cpf, email, password) => ({
  type: Types.REGISTER,
  payload: {
    name,
    cpf,
    email,
    password,
  },
});

export const authSuccess = token => ({
  type: Types.AUTH_SUCCESS,
  payload: {
    token,
  },
});

export const authError = () => ({
  type: Types.AUTH_ERROR,
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

export const logout = () => ({
  type: Types.LOGOUT,
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
    case Types.REGISTER:
      return { ...state, isRegistering: true };
    case Types.AUTH_SUCCESS:
      return { ...state, token: action.payload.token };
    case Types.AUTH_ERROR:
      return { ...state, isLogging: false, isRegistering: false };
    case Types.LOAD_USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLogging: false,
        isRegistering: false,
      };
    case Types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
