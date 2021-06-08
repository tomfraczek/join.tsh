import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectAllProducts, selectIsProductFetching } from '../../redux/shop/shop.selectors';
import { setProductsPager } from '../../redux/shop/shop.actions';

import FormInput from '../form-input/form-input.component';

import { ReactComponent as Magnifier } from '../assets/magnifier.svg';

import{
    SearchFiltersContainer,
    OptionsContainer
} from './search-filters.styles';

const SearchFilters = ({products, setProductsPager, isFetching}) => {
    const [filterCrudentials, setFilterCrudentials] = useState({
        search: '',
        active: false,
        promo: false,
    })

    const [allProducts, setAllProducts] = useState(null);

    useEffect(() => {
        setAllProducts(products);
    }, [isFetching])

    const handleChange = event =>{
        const { name, value, checked } = event.target;
        if(event.target.type == 'checkbox'){
            
            setFilterCrudentials({...filterCrudentials, [name]: checked });
            if(name === 'active'){
                if(checked === true && filterCrudentials.promo === false){
                    setProductsPager(allProducts.filter(product => product.active === checked && product.promo === false));
                } else if(checked === true && filterCrudentials.promo === true){
                    setProductsPager(allProducts.filter(product => product.active === checked && product.promo === true));
                } else if(checked === false && filterCrudentials.promo === true){
                    setProductsPager(allProducts.filter(product => product.promo === true));
                }
                if(checked === false && filterCrudentials.promo === false){
                    setProductsPager(allProducts);
                }
            } else {
                if(checked === true && filterCrudentials.active === false){
                    setProductsPager(allProducts.filter(product => product.promo === checked && product.active === false));
                } else if(checked === true && filterCrudentials.active === true){
                    setProductsPager(allProducts.filter(product => product.promo === checked && product.active === true));
                } else if(checked === false && filterCrudentials.active === true){
                    setProductsPager(allProducts.filter(product => product.promo === checked && product.active === true));
                }
                if(checked === false && filterCrudentials.active === false){
                    setProductsPager(allProducts);
                }
            }
        } else {
            setFilterCrudentials({...filterCrudentials, [name]: value });
        }
    }

    const handleSubmit = event =>{
        event.preventDefault();
        setProductsPager(products.filter(product => product.name.toLowerCase().includes(filterCrudentials.search)));
    }

    return(
        <SearchFiltersContainer onSubmit={handleSubmit}>
            <FormInput 
                name='search'
                type='text'
                handleChange={handleChange}
                placeholder='Search'
                img={<Magnifier onClick={handleSubmit}/>}
            />

            <OptionsContainer>
                <FormInput 
                    name='active'
                    type='checkbox'
                    label='Active'
                    handleChange={handleChange}
                    checked={filterCrudentials.active}
                />

                <FormInput 
                    name='promo'
                    type='checkbox'
                    label='Promo'
                    handleChange={handleChange}
                    checked={filterCrudentials.promo}
                />
            </OptionsContainer>
        </SearchFiltersContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    products: selectAllProducts,
    isFetching: selectIsProductFetching,
  })

const mapDispatchToProps = dispatch => ({
    setProductsPager: products => dispatch(setProductsPager(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilters);