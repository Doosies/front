import React, {useReducer, Dispatch, createContext, useContext} from 'react';

type State = {
    todos: Todo[];
    nextId: number;
}
type Action = 
    | {type: 'handleDone', id: number}
    | {type: 'handleDelete', id: number}
    | {type: 'handleCreate', text: string};
type TodoDispatch = Dispatch<Action>;

export const TodoStateContext = createContext<State | null>(null);
export const TodoDispatchContext = createContext<TodoDispatch | null>(null);

function reducer(state:State, action:Action):State {
    switch (action.type) {
        case 'handleDone':
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.id ? {...todo, done: !todo.done} : todo
                ),
            };
        case 'handleDelete':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
                nextId: state?.nextId -1,
            };
        case 'handleCreate':
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {id: state.nextId, text: action.text, done: false}
                ],
                nextId: state.nextId +1,
            };
        default:
            throw new Error('잘못된 type');
    }
}

export const TodoReducer = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, {
        todos: [
            {id: 1, text: '아침 산책', done: false},
            {id: 2, text: '오늘의 뉴스 읽기', done: false},
            {id: 3, text: '샌드위치 사 먹기', done: false},
            {id: 4, text: '리액트 공부하기', done: false},
        ],
        nextId: 5,
    });

    return (
        <TodoDispatchContext.Provider value={dispatch}>
            <TodoStateContext.Provider value={state}>
                {children}
            </TodoStateContext.Provider>
        </TodoDispatchContext.Provider>
    );
}

export function useTodoState():State {
    const state = useContext(TodoStateContext);
    if (!state) throw new Error('todoreducer 아래에 없음');
    return state;
}
export function useTodoDispatch():TodoDispatch {
    const dispatch = useContext(TodoDispatchContext);
    if(!dispatch) throw new Error('todoreducer 아래에 없음');
    return dispatch;
}