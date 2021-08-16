import React, {} from 'react';
import styled, {  } from 'styled-components';

const Name = styled.b<{toggle?: boolean}>`
    cursor: pointer;
    font-weight: bold;
    color: ${(props)=>props.toggle ? 'green' : 'black'};
`;

interface UserProps {
    user: User
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}
const User = React.memo( ({user, onToggle, onDelete}: UserProps) =>{
    console.log("user update", user.active);
    return (
        <div>
            <Name toggle={user.active} onClick={ ()=>{onToggle(user.id)} }>{user.username}</Name>
            <span> ({user.email})</span>
            <button onClick={ () => onDelete(user.id) }>제거</button>
        </div>
    );
});

export default React.memo(User);