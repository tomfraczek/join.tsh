import styled, { css } from 'styled-components';

const  buttonStyles = css`
    background: #4460F7;
    color: #fff;
    border: none;

    &:hover{
        background: #2140E8;
    }
`;

const invertedButtonStyles = css`
    background: #fff;
    color: #4460F7;
    border: 1px solid #4460F7;

    &:hover{
        border: 1px solid #2140E8
        color: #2140E8
    }
`;

const disabledButtonStyles = css`
    background: #9194A5;
    color: #fff;
    border: none;

    &:hover{
        background: #fff;
        border: 1px solid #9194A5;
        color: #9194A5
    }
`;

const getButtonsStyles = props => {
    if(props.disabled){
        return disabledButtonStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    box-sizing: border-box;
    height:38px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    ${getButtonsStyles}

    &:hover{
        cursor: pointer;
        box-sizing: border-box;
    }
`;