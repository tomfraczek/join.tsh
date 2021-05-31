import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectProducts = createSelector(
    [selectShop],
    product => product.products
)

export const selectIsProductFetching = createSelector(
  [selectShop],
  product => product.isFetching
);

export const selectIsProductLoaded = createSelector(
  [selectShop],
  product => !!product.products
);