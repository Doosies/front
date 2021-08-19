import React, {} from 'react';
import User from './User';

interface UsersListsProps {
    users: User[];
    // onToggle: (id: number) => void;
    // onDelete: (id: number) => void;
}
// const UsersLists = ({users, onToggle, onDelete}:UsersListsProps) => {
    const UsersLists = ({users}:UsersListsProps) => {

    // console.log("list update");
    return (
        <div>
            {users.map(u=> (
                // <User key={u.id} user={u} onToggle={onToggle} onDelete={onDelete}/>
                <User key={u.id} user={u}/>
            ))}
        </div>
    );
}

export default React.memo(UsersLists);