import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    width: 288px;
    height: 400px;
    border-radius: 8px;
    background: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    button{
        padding 0 16px;
    }
`;

export const ImageContainer = styled.div`
    width:100%;
    height:170px;
    background: url('${props => props.url}');
    background-size: cover;
    background-position: center;
`;

export const CardTitleContainer = styled.div`
    font-weight: 600;
    font-size: 18px;
    margin-top: 16px;
    color: #1A1B1D;
    padding: 0 16px;
`;

export const CardDescription = styled.p`
    font-weight: 600;
    font-size: 14px;
    color: #9194A5;
    padding: 0 16px;
`;