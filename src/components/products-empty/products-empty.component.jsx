import React from 'react';

import { ReactComponent as Icon } from '../assets/cart.svg';

import { ProductsEmptyContainer, EmptyImageContainer, ProductsEmptyContentHeader, ProductEmptyContentPar } from './products-empty.styles';

const ProductEmpty = () => (
    <ProductsEmptyContainer>
        <EmptyImageContainer>
            <Icon />
        </EmptyImageContainer>

        <ProductsEmptyContentHeader>
            Ooops… It’s empty here
        </ProductsEmptyContentHeader>

        <ProductEmptyContentPar>
            There are no products on the list
        </ProductEmptyContentPar>
    </ProductsEmptyContainer>
)

export default ProductEmpty;