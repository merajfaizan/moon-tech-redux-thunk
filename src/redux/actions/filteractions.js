import {
  clear_filters,
  TOGGLE_BRAND,
  TOGGLE_STOCK,
} from "../actionTypes/actionTypes";

export const clearFilters = () => {
  return {
    type: clear_filters,
  };
};

export const toggleBrand = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};

export const toggleStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
