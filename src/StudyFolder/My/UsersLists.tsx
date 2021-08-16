import React, {} from 'react';
import styled from 'styled-components';
import User from './User';


const StyledUsersLists = styled.div`
    
`
interface UsersListsProps {
    users: User[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}
const UsersLists = ({users, onToggle, onDelete}:UsersListsProps) => {
    console.log("list update");
    return (
        <StyledUsersLists>
            {users.map(u=> (
                <User key={u.id} user={u} onToggle={onToggle} onDelete={onDelete}/>
            ))}
        </StyledUsersLists>
    );
}

export default React.memo(UsersLists);