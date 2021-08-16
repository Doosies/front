import React, {} from 'react';
import User from './User';

interface UsersListsProps {
    users: User[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}
const UsersLists = ({users, onToggle, onDelete}:UsersListsProps) => {
    console.log("list update");
    return (
        <div>
            {users.map(u=> (
                <User key={u.id} user={u} onToggle={onToggle} onDelete={onDelete}/>
            ))}
        </div>
    );
}

export default React.memo(UsersLists);