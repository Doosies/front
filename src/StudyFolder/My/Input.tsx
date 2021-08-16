import React, {} from 'react';
import styled from 'styled-components';

interface InputProps {
    username: string;
    email: string;
    onChange: (e: ChangeEvent) => void;
    onCreate: () => void;
}

const StyledInput = styled.div`
    
`
const Input = ({username, email, onChange, onCreate}: InputProps) => {
    console.log("input update");
    return (
        <StyledInput>
            <input
                placeholder="닉네임"
                name="username"
                value={username}
                onChange={onChange}/>
            <input
                placeholder="이메일"
                name="email"
                value={email}
                onChange={onChange}/>
            <button
                onClick={onCreate}>
            생성
            </button>
        </StyledInput>
    );
}

export default React.memo(Input);