import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { fetchProductsStartAsync } from '../../redux/shop/shop.actions';

import { AppRoute } from '../../routing/AppRoute.enum';

class Products extends React.Component {

  componentDidMount(){
    console.log(this);
    const { fetchProductsStartAsync } = this.props;
    fetchProductsStartAsync()
  }
  // useEffect(() => {
  //   console.log()
    
  // }, [])

  render(){
    return (
      <>
      <h2>Products page</h2>
        <Link to={AppRoute.login}> Login </Link>
      </>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchProductsStartAsync: () => dispatch(fetchProductsStartAsync())
});

export default connect(null, mapDispatchToProps)(Products);