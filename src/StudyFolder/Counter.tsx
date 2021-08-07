import React, {useState} from 'react';
import styled from 'styled-components';


interface CounterProps {
    
}

const StyledCounter = styled.div`
    
`
const Counter = () => {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(num => num + 1);
    }
    const onDecrease = () => {
        setNumber(num => num -1);
    }

    return (
        <StyledCounter>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </StyledCounter>
    );
}

export default Counter;