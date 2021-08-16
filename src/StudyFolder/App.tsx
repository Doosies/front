import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';
import Page from './My/Page';

const StyledApp = styled.div`

`;

const App = () => {

    return (
        <StyledApp>
            {/* <Counter/> */}
            {/* <InputSample/> */}
            <Page/>
        </StyledApp>
    );
};

export default App;