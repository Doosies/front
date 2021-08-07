import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Hello from './Hello';

const StyledApp = styled.div`

`;

const App = () => {

    return (
        <StyledApp>
            <Counter/>
        </StyledApp>
    );
};

export default App;