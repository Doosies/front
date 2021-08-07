import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';

const StyledApp = styled.div`

`;

const App = () => {

    return (
        <StyledApp>
            {/* <Counter/> */}
            <InputSample/>
        </StyledApp>
    );
};

export default App;