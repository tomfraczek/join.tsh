import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import SearchFilters from '../search-filters/search-filters.component';

import {
    HeaderContainer,
    LogoContainer,
    LoginButtonContainer
} from './header.styles';

const Header = () => (
    <HeaderContainer>
        <LogoContainer>join.tsh.io</LogoContainer>

        <SearchFilters />

        <LoginButtonContainer>
            <CustomButton inverted>Log in</CustomButton>
        </LoginButtonContainer>

    </HeaderContainer>
)

export default Header;