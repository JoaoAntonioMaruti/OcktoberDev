import React from 'react';
import styled from 'styled-components';

const Search = () => <SearchInput />;

const SearchInput = styled.input`
    outline: none;
    padding: 8px 16px;
    width: 480px;
    border-radius: 16px;
    border: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 16px;
`

export default Search;