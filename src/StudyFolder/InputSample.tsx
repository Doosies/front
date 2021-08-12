import React, {useState} from 'react';
import styled from 'styled-components';

interface InputSampleProps {
    
}
interface userProps {
    user: 
    {
        id?: number;
        username?: string;
        email?: string;
    };
}

const StyledInputSample = styled.div`
    
`

const users: userProps[] = [
    {
        user: {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        }
    },
    {  user: {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        }
    },
    {   user: {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    }
];

const User = ({user}: userProps, key: number) => {
    console.log(user);
    return (
        <div key={key}>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}
const InputSample = () => {

    return (
        <StyledInputSample>
            {users.map( u => (
                <User user={u.user} key={u.user.id}/>
            ))}
        </StyledInputSample>
    );
}

export default InputSample;