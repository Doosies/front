import React, {useCallback, useReducer, useRef, useState} from 'react';
import styled from 'styled-components';
import Input from './Input';
import { useUserDispatch, useUserState } from './UserReducer';
import UsersLists from './UsersLists';
// import reducer from './UserReducer';


// interface Inputs {username: string; email: string;}
// const initialUser = {
//     inputs: {username: '', email: ''},
//     users: [
//         {
//             id: 1,
//             username: 'velopert',
//             email: 'public.velopert@gmail.com',
//             active: false,
//         },
//         {
//             id: 2,
//             username: 'tester',
//             email: 'tester@example.com',
//             active: false,
//         },
//         {
//             id: 3,
//             username: 'liz',
//             email: 'liz@example.com',
//             active: false,
//         }
//     ],
//     nextId: 4,
// };
// export const UserDispatch = React.createContext(initialUser);


const Page = () => {

    // const [state, dispatch] = useReducer(reducer,initialUser);
    const state = useUserState();
    const dispatch = useUserDispatch();

    const handleChange = useCallback((e: ChangeEvent) => {
        dispatch({
            type:'CHANGE_INPUT', 
            name: e.target.name, 
            value: e.target.value
        });
    }, []);
    
    const handleCreate = useCallback((ref: React.RefObject<HTMLInputElement>) => {
        dispatch({type:'ADD_USER'});
        ref.current?.focus();
    }, []);
    // const handleDelete = useCallback((id: number) => {
    //     dispatch({type: 'DELETE_USER', id});
    // }, []);
    // const handleToggle = useCallback((id: number) => {
    //     dispatch({type: 'TOGGLE_NAME', id});
    // }, []);
    

    return (
        <div>
            <Input 
                username={state.inputs.username}
                email={state.inputs.email}
                onChange={handleChange} 
                onCreate={handleCreate}
            />
            <UsersLists 
                users={state.users}
                // onToggle={handleToggle}
                // onDelete={handleDelete}
            />
        </div>
    );
}

export default Page;