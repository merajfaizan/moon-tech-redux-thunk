import {
  clear_filters,
  TOGGLE_BRAND,
  TOGGLE_STOCK,
} from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    brands: [],
    stock: false,
  },
  keyword: "",
};

const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case clear_filters:
      return {
        ...state,
        filters: {
          brands: [],
          stock: false,
        },
      };
    case TOGGLE_BRAND:
      if (!state.filters.brands.includes(action.payload)) {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: [...state.filters.brands, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }
    case TOGGLE_STOCK:
      return {
        ...state,
        filters: {
          ...state.filters,
          stock: !state.filters.stock,
        },
      };
    default:
      return state;
  }
};

export default filterReducers;
