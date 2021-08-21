import React, {} from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import { useTodoState } from './TodoReducer';

interface TodoListsProps {
    
}

const StyledTodoLists = styled.div`
    width:100%;
    /* height:100%; */
    overflow-y: auto;
`
const TodoLists = () => {
    const state = useTodoState();

    return (
        <StyledTodoLists>
            {state.todos.map( todo => (
                <Todo id={todo.id} text={todo.text} key={todo.id} done={todo.done}/>
            ))}
        </StyledTodoLists>
    );
}

export default React.memo(TodoLists);