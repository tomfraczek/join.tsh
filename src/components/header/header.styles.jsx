import styled, { css } from 'styled-components';

const DisplayFlex = css`
    display: flex;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    ${DisplayFlex}
    height: 144px;
    padding: 0 108px;
`;

export const LogoContainer = styled.div`
    width: 103px;
    height:40px;
    color: #1A1B1D;
    font-weight:600;
    font-size: 24px;
    flex:1;
`;

export const LoginButtonContainer = styled.div`
    flex: 1;
    text-align: right;
`;