import styled, { css } from 'styled-components';
import media from '../assets/media';

const DisplayFlex = css`
    display: flex;
    
`;

export const SearchFiltersContainer = styled.form`
    ${DisplayFlex}
    flex-direction: column;
    width:100%;
    order: 3;
    margin-top:29px;

    ${media.tablet`
        flex: 4;
        flex-direction: row;
        width: unset;
        order: unset;
        margin-top:0;
    `};
`;

export const OptionsContainer = styled.div`
    ${DisplayFlex}
    flex-direction: row;
    justify-content: flex-start;
    margin-top:24px;

    ${media.tablet`
        margin-top:0;
        margin-left: 24px;
        align-items: center;
    `};
`;