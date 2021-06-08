import React, {useEffect, useState} from 'react';

import StarRating from '../star-rating/star-rating.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    ProductCardContainer,
    ImageContainer,
    CardTitleContainer,
    CardDescription,
} from './product-card.styles';
import ProductModal from '../product-modal/product-modal.component';

const ProductCard = ({product}) => {

    const [toggleModal, setToggleModal] = useState(false);

    const handleClick = () => {
        setToggleModal(!toggleModal);
    }

    return (
        <ProductCardContainer>
            <ImageContainer url={product.image} />
            <CardTitleContainer>{product.name}</CardTitleContainer>
            <CardDescription>{product.description}</CardDescription>
            <StarRating value={product.rating} />
            <CustomButton onClick={handleClick} disabled={!product.active}>{product.active ? 'Show details' : 'Unavailable'}</CustomButton>
            {
                toggleModal ? <ProductModal product={product} handleClick={handleClick} /> : null
            }
        </ProductCardContainer>
    )
}

export default ProductCard;