import React from 'react';
import styled from 'styled-components';
import Counter from './My/Counter';
import Page from './My/Page';
import ReducerSample from './ReducerSample';

const StyledApp = styled.div`

`;

const App = () => {

    return (
        <StyledApp>
            {/* <Counter/> */}
            {/* <InputSample/> */}
            <Page/>
            {/* <Counter/> */}
            {/* <ReducerSample/> */}
        </StyledApp>
    );
};

export default App;