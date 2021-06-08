import styled from 'styled-components';
import media from '../../components/assets/media';

export const ProductPageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    justify-content: space-between;
    background: #F2F2F2;
    padding-top: 56px;
    height:100%;

    ${media.tablet`
        padding: 0 100px;
    `};
`;