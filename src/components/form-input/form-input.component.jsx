import React from 'react';

import {
    FormInputContainer,
    InputGroup,
    Input,
    Label
} from './form-input.styles';

const FormInput = ({label, type, handleChange, ...otherProps}) => (
    <FormInputContainer>
        <InputGroup>
            <Input type={type} onChange={handleChange} {...otherProps}/>
            {label ? <Label>{label}</Label> : null}
        </InputGroup>
    </FormInputContainer>
)

export default FormInput;