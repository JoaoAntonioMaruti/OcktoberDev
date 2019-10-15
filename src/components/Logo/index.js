import React from 'react';
import styled from 'styled-components';
import Deafult from './../../assets/default.png';
import Christmas from './../../assets/christmas.gif'

const Logo = ({ type }) => {
    const img = type === 'christmas' ? Christmas : Deafult;
    return <GoogleLogo alt='google-logo' src={img}/>
};

const GoogleLogo = styled.img`
    max-width: 250px;
    margin: 20px;
`

export default Logo;