import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import{
    SearchFiltersContainer
} from './search-filters.styles';

const SearchFilters = () => {
    const [filterCrudentials, setFilterCrudentials] = useState({
        search: '',
        active: false,
        promo: false,
    })

    const handleChange = event =>{
        const { name, value } = event.target;
  
        setFilterCrudentials({...filterCrudentials, [name]: value });
    }

    return(
        <SearchFiltersContainer>
            <FormInput 
                name='search'
                type='text'
                handleChange={handleChange}
                placeholder='Search'
            />

            <FormInput 
                name='active'
                type='checkbox'
                label='Active'
                handleChange={handleChange}
            />

            <FormInput 
                name='promo'
                type='checkbox'
                label='Promo'
                handleChange={handleChange}
            />
        </SearchFiltersContainer>
    )
}

export default SearchFilters;