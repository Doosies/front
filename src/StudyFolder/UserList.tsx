import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

interface UserProps {
    id: number;
    username: string;
    email: string;
    active: boolean;
}
interface UsersProps {
    users: UserProps[];
    onDelete: (id: number) =>void;
    onToggle: (id: number) =>void;
}
interface UserProp {
    user: UserProps;
    onDelete: (id: number) =>void;
    onToggle: (id: number) =>void;
}


const User = React.memo(
    ({user, onDelete, onToggle}: UserProp) => {
        console.log("update");
    
        return (
            <div>
                <b
                    onClick={()=>onToggle(user.id)}
                    style={{
                        cursor: 'pointer',
                        color:  user.active ? 'green' : 'black',
                    }}
                >
                    {user.username}
                </b> 
                <span>({user.email})</span>
                <button onClick={()=>onDelete(user.id)}>삭제</button>
            </div>
        );
    }
);
// const User = 

const UserList = ({users, onDelete, onToggle}: UsersProps) => {

    return (
        <div>
            {users.map( v => 
                <div key={v.id}>
                    <User 
                        user={v}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                </div>
            )}
        </div>
    );
}

export default React.memo(UserList);