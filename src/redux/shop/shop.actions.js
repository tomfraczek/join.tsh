import ShopActionTypes from './shop.types';

export const fetchProductsStart = () => ({
  type: ShopActionTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = productsMap => ({
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: productsMap
});

export const fetchProductsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage
});

export const fetchProductsStartAsync = () => {
  return dispatch => {
    dispatch(fetchProductsStart());

    fetch('https://join-tsh-api-staging.herokuapp.com/products?limit=10&page=1')
    .then(response => response.json())
    .then(data => {
      dispatch(fetchProductsSuccess(data));
    })
    .catch(error => dispatch(fetchProductsFailure(error.message)));
      
  };
};