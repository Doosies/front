import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Main from './TodoList/Main';
import { TodoReducer } from './TodoList/TodoReducer';

const StyledApp = styled.div`
    width: 100%;
    height: 100%;
`;

const App = () => {

    return (
        <StyledApp>
            <GlobalStyle/>
            <TodoReducer>
                <Main/>
            </TodoReducer>
        </StyledApp>
    );
};

export default App;