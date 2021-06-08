import ShopActionTypes from './shop.types';

export const fetchAllProductsStart = () => ({
  type: ShopActionTypes.FETCH_ALL_PRODUCTS_START
});

export const fetchAllProductsSuccess = products => ({
  type: ShopActionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchAllProductsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_ALL_PRODUCTS_FAILURE,
  payload: errorMessage
});

export const fetchProductsStart = () => ({
  type: ShopActionTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = products => ({
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage
});

export const setProductsPager = products => ({
  type: ShopActionTypes.SET_PRODUCTS_PAGER,
  payload: products
})

export const fetchProductsStartAsync = () => {
  return dispatch => {
    dispatch(fetchProductsStart());

    fetch('https://join-tsh-api-staging.herokuapp.com/products')
    .then(response => response.json())
    .then(data => {
      dispatch(fetchProductsSuccess(data.items));
    })
    .catch(error => dispatch(fetchProductsFailure(error.message)));
  };
};

export const fetchAllProductsStartAsync = () => {
  return dispatch => {
    dispatch(fetchAllProductsStart());

    fetch('https://join-tsh-api-staging.herokuapp.com/products')
    .then(response => response.json())
    .then(data => {
      dispatch(fetchAllProductsSuccess(data.items));
    })
    .catch(error => dispatch(fetchAllProductsFailure(error.message)));
  };
};

export const fetchProductsStartAsyncPager = page => {
  return dispatch => {
    dispatch(fetchProductsStart());

    fetch(`https://join-tsh-api-staging.herokuapp.com/products?limit=10&page=${page}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch(fetchProductsSuccess(data));
    })
    .catch(error => dispatch(fetchProductsFailure(error.message)));
  };
};