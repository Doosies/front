import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import UserList from './UserList';
interface UserProps {
    id: number;
    username: string;
    email: string;
    active: boolean;
}

const userslists: UserProps[] = [
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

const InputSample = () => {

    const nextId = useRef<number>(4);
    console.log(nextId.current);

    const refName = useRef<HTMLInputElement>(null);
    const [inputs, setInputs] = useState({
        id: '',
        username: '',
        email: '',
        active: false,
    });
    const [users, setUsers] = useState(userslists);

    const handleCreate = () => {
        const user: UserProps = {
            id: Number(nextId.current),
            username: inputs.username,
            email: inputs.email,
            active: false,
        };
        setUsers([...users,user]);
        setInputs({
            id: '',
            username: '',
            email: '',
            active: false,
        });
        refName.current?.focus();
        nextId.current += 1;
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }
    const handleDelete = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
        nextId.current -= 1;
    }
    const handleToggle = (id: number) => {
        setUsers(
            users.map( v => 
                v.id === id ? {...v, active: !v.active} : v
            )
        );
        console.log(id,users);
    }

    return (
        <div>
            <input name="username"
                placeholder="이름"
                value={inputs.username}
                onChange={handleChange}
                ref = {refName}
            />
            <input name="email"
                placeholder="이메일"
                value={inputs.email}
                onChange={handleChange}
            />
            <button name="생성" onClick={handleCreate}>생성</button>
            <UserList onToggle={handleToggle} onDelete={handleDelete} users={users}/>
        </div>
    );
}

export default InputSample;