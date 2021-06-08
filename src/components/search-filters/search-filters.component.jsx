import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectAllProducts, selectIsProductFetching } from '../../redux/shop/shop.selectors';
import { setProductsPager } from '../../redux/shop/shop.actions';

import FormInput from '../form-input/form-input.component';

import { ReactComponent as Magnifier } from '../assets/magnifier.svg';

import{
    SearchFiltersContainer
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



    //MORE WORK REQUIRED!
    const handleChange = event =>{
        const { name, value, checked } = event.target;
        console.log(products.length)
        
        if(event.target.type == 'checkbox'){
            setFilterCrudentials({...filterCrudentials, [name]: checked });
            if(name === 'active'){
                console.log(products.filter(product => product.active === checked))
                setProductsPager(products.filter(product => product.active === checked));
                if(checked === false){
                    setProductsPager(allProducts);
                }
            } else {
                setProductsPager(products.filter(product => product.promo === checked));
                if(checked === false){
                    setProductsPager(allProducts);
                }
            }
        } else {
            setFilterCrudentials({...filterCrudentials, [name]: value });
        }
    }

    const handleClick = () =>{
        setProductsPager(products.filter(product => product.name.toLowerCase().includes(filterCrudentials.search)));
    }

    console.log(filterCrudentials)
    return(
        <SearchFiltersContainer>
            <FormInput 
                name='search'
                type='text'
                handleChange={handleChange}
                placeholder='Search'
                img={<Magnifier onClick={handleClick}/>}
            />

            <FormInput 
                name='active'
                type='checkbox'
                label='Active'
                handleChange={handleChange}
                value={filterCrudentials.active}
            />

            <FormInput 
                name='promo'
                type='checkbox'
                label='Promo'
                handleChange={handleChange}
                value={filterCrudentials.promo}
            />
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