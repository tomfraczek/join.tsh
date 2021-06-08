import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import Pager from '@material-ui/lab/Pagination';

import {
    PaginationContainer
} from './pagination.styles';

const Pagination = ({pages, handleChange}) => {
    return(
        <PaginationContainer>
            {pages.length !== 0 ? <Pager count={pages} shape="rounded" onChange={handleChange}/> : null}
        </PaginationContainer>
)}


export default Pagination;