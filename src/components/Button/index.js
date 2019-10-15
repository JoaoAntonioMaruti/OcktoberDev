import React from 'react';
import styled from 'styled-components';

const Button = ({ title, onButtonPress }) => (
    <StyledButton onClick={() => onButtonPress ? onButtonPress() : ''}>{title}</StyledButton>
);

const StyledButton = styled.button`
    padding: 8px 16px;
    background: #DDD;
    border: none;
    margin: 0 8px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    &:active {
        background: #aaa;
    }
`

export default Button;