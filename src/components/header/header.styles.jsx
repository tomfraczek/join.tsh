import styled, { css } from 'styled-components';
import media from '../assets/media';

const DisplayFlex = css`
    display: flex;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    ${DisplayFlex}
    height: 144px;
    padding: 0;
    margin: 56px 24px 36px 24px;
    flex-wrap: wrap;

    ${media.tablet`
        padding: 0 108px;
        marginb: 0;
    `};
`;

export const LogoContainer = styled.div`
    width: 103px;
    height:40px;
    color: #1A1B1D;
    font-weight:600;
    font-size: 24px;
    flex:1;
    order: 1;

    ${media.tablet`
        order: unset;
    `};
`;

export const LoginButtonContainer = styled.div`
    flex: 1;
    text-align: right;
    order: 2;

    ${media.tablet`
        order: unset;
    `};
`;