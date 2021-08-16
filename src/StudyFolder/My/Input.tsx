import React, {} from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

interface InputProps {
    username: string;
    email: string;
    onChange: (e: ChangeEvent) => void;
    onCreate: (ref: React.RefObject<HTMLInputElement>) => void;
}

const StyledInput = styled.div`
    
`
const Input = ({username, email, onChange, onCreate}: InputProps) => {
    console.log("input update");

    const ref = useRef<HTMLInputElement>(null);

    return (
        <StyledInput>
            <input
                placeholder="닉네임"
                name="username"
                value={username}
                onChange={onChange}
                ref={ref} />
            <input
                placeholder="이메일"
                name="email"
                value={email}
                onChange={onChange}/>
            <button
                onClick={ () => onCreate(ref)}
            >생성
            </button>
        </StyledInput>
    );
}

export default React.memo(Input);