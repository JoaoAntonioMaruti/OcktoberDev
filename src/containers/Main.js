import React from 'react';
import styled from 'styled-components';
import Logo from './../components/Logo';
import Search from './../components/Search';
import Button from './../components/Button';

const Main = ({ type }) => {
    return (
        <Container>
            <SearchBox>
                <Logo type={type} />
                <Search />
            </SearchBox>
            <ActionsContainer>
                <Button title={'Pesquisa Google'}/>
                <Button title={'Estou com sorte'}/>
            </ActionsContainer>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ActionsContainer = styled.div`
    display: flex;
    margin: 16px;
`

export default Main;