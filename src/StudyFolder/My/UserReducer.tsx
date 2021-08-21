import React, {useContext, useReducer} from 'react'
import produce from 'immer';
import { Dispatch } from 'react';

type State = {
    inputs: {username: string, email: string, [name: string]: string},
    users: User[],
    nextId: number,
}


type Action = 
    | {type: 'ADD_USER'}
    | {type: 'DELETE_USER', id: number}
    | {type: 'CHANGE_INPUT', name: string, value: string }
    | {type: 'TOGGLE_NAME', id: number};

type UserDispatch = Dispatch<Action>;

const UserStateContext = React.createContext<State | null>(null);
const UserDispatchContext = React.createContext<UserDispatch | null>(null);

function reducerT(state: State, action: Action):State {
    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    username: '',
                    email: '',
                },
                users: [
                        ...state.users,
                        {
                            id: state.nextId,
                            username: state.inputs.username,
                            email: state.inputs.email,
                            active: false
                        }
                    ],
                nextId: state.nextId +1,
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter( user => user.id !== action.id),
                nextId: state.nextId -1,
            }
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]:action.value,
                }
            };
        case 'TOGGLE_NAME':
            return {
                ...state,
                users: state.users.map( user => user.id === action.id ? {...user, active: !user.active} : user),
            }
    }
}
function reducer (state: State, action: Action) {
    switch (action.type) {
        case 'ADD_USER':
            return produce(state, draft => {
                const newUser: User = {
                    id: state.nextId,
                    username: state.inputs.username,
                    email: state.inputs.email,
                    active: false,
                };
                draft.nextId ++;
                draft.users.push(newUser);
            });
        case 'DELETE_USER':
            return produce(state, draft => {
                const idx = draft.users.findIndex( user => user.id === action.id);
                draft.users.splice(idx,1);
            });
        case 'CHANGE_INPUT':
            return produce(state, draft => {
                draft.inputs[action.name] = action.value;
            });
        case 'TOGGLE_NAME':
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                if (user) user.active = !user.active;
            })
        default:
            throw new Error('알수없는타입');
    }
}

export function UserReducer({children}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer( reducer, {
        inputs: {username: '', email: ''},
        users: [
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
        ],
        nextId: 4,
    });

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

export function useUserState() {
    const state = useContext(UserStateContext);
    if (!state) throw new Error('Cannot find UserProvider');
    return state;
}

export function useUserDispatch() {
    const dispatch = useContext(UserDispatchContext);
    if(!dispatch) throw new Error('Cannot find UserProvider');
    return dispatch;
}

