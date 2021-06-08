import React from 'react';

import { ProductModalContainer, ModalContentContainer, CloseButtonContainer, ModalProducPicture , ModalProductTitle, ModalProductDescription } from './product-modal.styles';

const ProductModal = ({product, handleClick}) => (
    <ProductModalContainer>
        <ModalContentContainer>
            <CloseButtonContainer onClick={handleClick}>
                &#x2715;
            </CloseButtonContainer>
                
            <ModalProducPicture>
                <img src={product.image} />
            </ModalProducPicture>

            <ModalProductTitle>
                {product.name}
            </ModalProductTitle>

            <ModalProductDescription>
                {product.description}
            </ModalProductDescription>
        </ModalContentContainer>
    </ProductModalContainer>
)

export default ProductModal;