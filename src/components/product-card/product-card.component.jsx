import React from 'react';

import StarRating from '../star-rating/star-rating.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    ProductCardContainer,
    ImageContainer,
    CardTitleContainer,
    CardDescription,
} from './product-card.styles';

const ProductCard = ({product}) => (
    <ProductCardContainer>
        <ImageContainer url={product.image} />
        <CardTitleContainer>{product.name}</CardTitleContainer>
        <CardDescription>{product.description}</CardDescription>
        <StarRating value={product.rating} />
        <CustomButton>Show details</CustomButton>
    </ProductCardContainer>
)

export default ProductCard;

// active: true
// description: "Deleniti aliquid consequatur."
// id: 1
// image: "https://picsum.photos/640/480?random=272"
// name: "Ergonomic Concrete Shirt"
// promo: false
// rating: 5