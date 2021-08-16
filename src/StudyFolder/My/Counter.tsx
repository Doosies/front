import React, {useState} from 'react';
import { useReducer } from 'react';

interface CounterProps {
    
}

type Action = {type: 'INCREASE'} | {type: 'DECREASE'} | {type: 'INCREASE5'} | {type: 'DECREASE5'};
function reducer(state: number,action: Action) {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state -1;
        case 'INCREASE5':
            return state + 5;
        case 'DECREASE5':
            return state - 5;
        default:
            throw new Error("에러");
    }
}
const Counter = () => {
    const [cnt, dispatch] = useReducer(reducer,0);

    const handleIncrease = () => dispatch({type:'INCREASE'});
    const handleIncrease5 = () => dispatch({type:'INCREASE5'});
    const handleDecrease = () => dispatch({type:'DECREASE'});
    const handleDecrease5 = () => dispatch({type:'DECREASE5'});

    return (
        <div>
            <h1>Now Num : {cnt} </h1>
            <button onClick={handleIncrease}> +1 </button>
            <button onClick={handleIncrease5}> +5 </button>
            <button onClick={handleDecrease}> -1 </button>
            <button onClick={handleDecrease5}> -5 </button>
        </div>        
    );
}

export default Counter;