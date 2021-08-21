import React, {useState} from 'react';
import styled from 'styled-components';
import Create from './Create';
import Header from './Header';
import TodoLists from './TodoLists';

interface MainProps {
    
}

const StyledMain = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E9ECEF;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Screen = styled.div`
    width:512px;
    height: 768px;
    border-radius: 16px;
    margin: 50px auto 32px;

    background-color: white;
    box-shadow: rgb(0 0 0 / 4%) 0px 0px 8px 0px;
    
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Main = () => {
    return (
        <StyledMain>
            <Screen>
                <Header/>
                <TodoLists/>
                <Create/>
            </Screen>
        </StyledMain>
    );
}

export default Main;