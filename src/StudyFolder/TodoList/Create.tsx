import React, {useState} from 'react';
import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from './TodoReducer';

interface CreateProps {
    // isOpen: boolean;
}
const StyledCreate = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
`;

const CreateForm = styled.form`
    width: 100%;
    padding: 32px 32px 72px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: stretch;
    position: absolute;
    bottom: 0;

    border-bottom-left-radius: 16px;
    background-color: #F8F9FA;
`;

const CreateInput = React.memo(styled.input`
    width: 100%;
    padding: 12px;
    outline: none;
    border: 1px solid rgb(222, 226, 230);
`);

const CreateButton = React.memo(styled.button<{open: boolean}>`
    width: 70px;
    height: 70px;

    position: absolute;
    bottom: 0;
    bottom: -35px;

    border-radius: 50%;
    border: 1px solid #F8F9FA;
    outline: none;
    background: #38d9a9;
    font-size: 60px;
    color: white;

    transition: 0.125s all ease-in;

    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }

    ${({open}) => open && css`
        background: #ff6b6b;
        transform: rotate(45deg);
        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
    `}
`);
const Create = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [input, setinput] = useState('');
    const dispatch = useTodoDispatch();

    const handleOnClick = () => {
        setIsOpen(nowOpen => !nowOpen );
    }
    const handleChangeInput = (e: ChangeEvent) => setinput(e.target.value);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        dispatch({type:'handleCreate', text: input});
        setIsOpen(nowOpen => !nowOpen );
    }


    return (
        <StyledCreate>
            {isOpen &&
                <CreateForm onSubmit={handleSubmit}>
                    <CreateInput 
                        placeholder={'할 일을 입력 후, Enter 를 누르세요'}
                        onChange={handleChangeInput}
                        autoFocus
                    />
                </CreateForm>
            }
            <CreateButton open={isOpen} onClick={handleOnClick}>
                +
            </CreateButton>
        </StyledCreate>
    );
}

export default React.memo(Create);