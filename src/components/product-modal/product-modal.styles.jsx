import styled from 'styled-components';

export const ProductModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000d9;
    display: flex;
    justify-content: center;
    align-items: center;    
`;

export const ModalContentContainer = styled.div`
    background-color: #fff;
    // width: 600px;
    // height: 530px;
    position: relative;
    border-radius: 8px;
`;

export const CloseButtonContainer = styled.div`
    color: #000;
    font-size: 28px;
    text-align:right;
    margin: 16px 16px 0 0 ;
`;

export const ModalProducPicture = styled.div`
`;

export const ModalProductTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
    margin-top: 16px;
    color: #1A1B1D;
    padding: 0 32px;
`;

export const ModalProductDescription = styled.div`
    color: #9194A5;
    padding: 0 32px;
    font-size: 18px;
    margin-bottom: 56px;
    margin-top:8px;
`;

