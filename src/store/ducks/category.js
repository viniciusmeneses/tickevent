export const Types = {
  LOAD: 'category/LOAD',
  LOAD_SUCCESS: 'category/LOAD_SUCCESS',
};

export const loadCategories = () => ({
  type: Types.LOAD,
});

export const loadCategoriesSuccess = categories => ({
  type: Types.LOAD_SUCCESS,
  payload: {
    categories,
  },
});

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOAD_SUCCESS:
      return action.payload.categories;
    default:
      return state;
  }
}
