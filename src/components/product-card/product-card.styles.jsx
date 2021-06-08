import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    width: 288px;
    height: 400px;
    border-radius: 8px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 8px;
    overflow: hidden;

    button{
        width: calc(100% - 32px);
        margin: 0 auto 24px;
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

export const CardDescription = styled.div`
    font-weight: 600;
    font-size: 14px;
    color: #9194A5;
    padding: 0 16px;
`;