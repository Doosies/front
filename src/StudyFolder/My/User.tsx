import React, { useCallback, useContext } from 'react';
import styled, {  } from 'styled-components';
import { useUserDispatch } from './UserReducer';

const Name = styled.b<{toggle?: boolean}>`
    cursor: pointer;
    font-weight: bold;
    color: ${(props)=>props.toggle ? 'green' : 'black'};
`;

interface UserProps {
    user: User
    // onToggle: (id: number) => void;
    // onDelete: (id: number) => void;
}
// const User = React.memo( ({user, onToggle, onDelete}: UserProps) =>{
const User = React.memo( ({user}: UserProps) =>{
    console.log("user update", user.active);
    // const dispatch = useContext(UserDispatch);
    const dispatch = useUserDispatch();


    const handleDelete = useCallback((id: number) => {
        dispatch({type: 'DELETE_USER', id});
    }, []);
    const handleToggle = useCallback((id: number) => {
        dispatch({type: 'TOGGLE_NAME', id});
    }, []);

    return (
        <div>
            <Name toggle={user.active} onClick={ ()=>{handleToggle(user.id)} }>{user.username}</Name>
            <span> ({user.email})</span>
            <button onClick={ () => handleDelete(user.id) }>제거</button>
        </div>
    );
});

export default React.memo(User);