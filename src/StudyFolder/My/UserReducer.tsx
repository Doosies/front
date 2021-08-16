import React, {useReducer} from 'react'

type State = {
    inputs: {username: string, email: string},
    users: User[],
    nextId: number,
}

type Action = 
    | {type: 'ADD_USER'}
    | {type: 'DELETE_USER', id: number}
    | {type: 'CHANGE_INPUT', name: string, value: string }
    | {type: 'TOGGLE_NAME', id: number};

function reducer(state: State, action: Action):State {
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


export default reducer;
// 추가, 삭제, 인풋체인지, 토글