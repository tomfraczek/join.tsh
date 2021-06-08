import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { fetchAllProductsStartAsync, setProductsPager } from '../../redux/shop/shop.actions';
import { selectProducts, selectIsProductLoaded, selectIsProductFetching } from '../../redux/shop/shop.selectors'

import { AppRoute } from '../../routing/AppRoute.enum';

import Spinner from '../../components/spinner/spinner.component';
import ProductCard from '../../components/product-card/product-card.component';
import Pagination from '../../components/pagination/pagination.component';


import {
  ProductPageContainer
} from './product.styles';
import ProductEmpty from '../../components/products-empty/products-empty.component';

class Products extends React.Component {
  state = {
    currentPage: 1,
    productsPerPage: 8
  }

  componentDidMount(){
    const { fetchAllProductsStartAsync } = this.props;
    fetchAllProductsStartAsync()
  }

  render(){
    const { isLoaded, products, pages, setProductsPager, isFetching, fetchAllProductsStartAsync } = this.props;
    const { currentPage, productsPerPage } = this.state;
    const indexOfLastTodo = currentPage * productsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - productsPerPage;

    const handleChange = (event, page) => {
      event.preventDefault();
      this.setState({
        currentPage: page
      });
  }
    return (
      <ProductPageContainer>
      {
        !isFetching ? 
        products.slice(indexOfFirstTodo, indexOfLastTodo).map(product => <ProductCard key={product.id} product={product} />) 
        : <Spinner />
      }

      {
        !products.length ? <ProductEmpty /> : null
      }

      {!isFetching && products.length ? <Pagination pages={Math.round(products.length/10)} handleChange={handleChange}/> : null}
      </ProductPageContainer>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAllProductsStartAsync: () => dispatch(fetchAllProductsStartAsync()),
  setProductsPager: products => dispatch(setProductsPager(products)),
  fetchAllProductsStartAsync: products => dispatch(fetchAllProductsStartAsync(products))
});

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
  isLoaded: selectIsProductLoaded,
  isFetching: selectIsProductFetching,
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);