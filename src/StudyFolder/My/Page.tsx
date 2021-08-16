import React, {useCallback, useRef, useState} from 'react';
import styled from 'styled-components';
import Input from './Input';
import UsersLists from './UsersLists';

const StyledPage = styled.div`
    
`

const usersLists: User[] = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: false,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    }
  ];

// interface Inputs {username: string; email: string;}
const Page = () => {

    const [inputs, setInputs] = useState({
        username: '', email: '',
    });
    const [users, setUsers] = useState(usersLists);
    const nextId = useRef<number>(4);
    // const {username, email} = users;
    
    const handleChange = useCallback( (e: ChangeEvent) => {
        const {name, value} = e.target;

        setInputs( (prev: Input) => ({
            ...prev,
            [name]: value
        }));
    },[]);
    
    const handleCreate = useCallback( () => {
        const newUser: User = {
            id: nextId.current,
            username: inputs.username,
            email: inputs.email,
            active: false,
        };
        setUsers((prev: User[]) => [...prev, newUser]);
        nextId.current += 1;

    },[inputs.email, inputs.username]);
    
    const handleDelete = useCallback( (id: number) => {
        setUsers( (prvUsers: User[]) => 
            prvUsers.filter( user => user.id !== id)
        );
        nextId.current -= 1;
    },[]);
    

    const handleToggle = useCallback( (id: number) => {
        setUsers((prev:User[]) => prev.map(
            u => u.id === id ? {...u, active: !u.active} : u
        ));
    },[]);
    

    return (
        <StyledPage>
            <Input 
                username={inputs.username}
                email={inputs.email}
                onChange={handleChange} 
                onCreate={handleCreate}
            />
            <UsersLists 
                users={users}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        </StyledPage>
    );
}

export default Page;