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


const User = ({user, onDelete, onToggle}: UserProp) => {
    useEffect(() => {
        console.log("마운트");
        return () => {
            console.log("언마운트");
    }
    }, []);

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

export default UserList;