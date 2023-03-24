import {
  ADD_TO_CART,
  ADD_PRODUCT,
  LOAD_PRODUCT,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  SEARCH_PRODUCT,
} from "../actionTypes/actionTypes";

export const searchProduct = (str) => {
  return {
    type: SEARCH_PRODUCT,
    payload: str,
  };
};

export const loadProduct = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
