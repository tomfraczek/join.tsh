import styled, { css } from 'styled-components';

export const FormInputContainer = styled.div`
    & input[type=text]{
        width:392px;
        height:48px;
        background: #FFFFFF;
        border: 1px solid #E0E2EA;
        border-radius: 8px;
        padding: 16px;
    }

    & input[type=checkbox]{
        width: 24px;
        height: 24px;
        margin-left: 24px;
        
    }
`;

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    svg{
        position: absolute;
        right: 19.5px;
    }
`;

export const Input = styled.input`

`;

export const Label = styled.label`
    margin-left: 8px;
`;