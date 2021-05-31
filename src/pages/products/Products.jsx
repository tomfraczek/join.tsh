import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { fetchProductsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectProducts, selectIsProductLoaded } from '../../redux/shop/shop.selectors'

import { AppRoute } from '../../routing/AppRoute.enum';

import Spinner from '../../components/spinner/spinner.component';
import ProductCard from '../../components/product-card/product-card.component';

import {
  ProductPageContainer
} from './product.styles';

class Products extends React.Component {

  componentDidMount(){
    const { fetchProductsStartAsync, isLoaded } = this.props;
    fetchProductsStartAsync()
  }

  render(){
    const { isLoaded, products } = this.props;
    return (
      <ProductPageContainer>
      {
        isLoaded ? products.items.map(product => 
          <ProductCard key={product.id} product={product} />) 
        : <Spinner />
      }
      </ProductPageContainer>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync())
});

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
  isLoaded: selectIsProductLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);