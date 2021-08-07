import React from 'react';
import styled from 'styled-components';
import Hello from './Hello';

const StyledApp = styled.div`
    border: 2px solid black;
    padding: 16px;
`;

const App = () => {
    return (
        <StyledApp>
            <Hello name="react" color="red" isSpecial/>
            <Hello color="pink"/>
        </StyledApp>
    );
};

export default App;