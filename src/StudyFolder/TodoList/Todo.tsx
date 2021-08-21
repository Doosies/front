import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';
import { useTodoDispatch } from './TodoReducer';

interface TodoProps {
    id: number;
    text: string;
    done: boolean;
}

const DeleteButton = styled.div`
    cursor: pointer;
    font-size: 25px;
    color: #dee2e6;
    display: none;

    &:hover{
        color: #ff6b6b;
    }
`;
const StyledTodo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;

    &:hover {
        ${DeleteButton} {
            display: initial;
        }
    }

`;
const Text = styled.div<{done: boolean}>`
    margin-left: 10px;
    font-size: 21px;
    flex-grow: 1;

    ${({done}) => done && css`color:#dee2e6`}
`;


const CheckCircle = styled.div<{done: boolean}>`
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    border-radius: 50px;

    border: 1px solid #ced4da;

    ${({done}) => done && css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`


const Todo = ({text, done, id}: TodoProps) => {
    console.log("todo");
    const dispatch = useTodoDispatch();

    const handleDone = useCallback( () => {
        dispatch({type:'handleDone', id: id}); 
    },[]);
    const handleDelete = useCallback( () => {
        dispatch({type:'handleDelete', id: id});
    },[]);
    
    
    return (
        <StyledTodo>
            <CheckCircle done={done} onClick={handleDone}>
                {done && <MdDone/>}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <DeleteButton onClick={handleDelete}>
                <MdDelete/>
            </DeleteButton>
        </StyledTodo>
    );
}

Todo.defaultProps = {
    done: false
}

export default React.memo(Todo);