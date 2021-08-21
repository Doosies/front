import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import {ReactComponent as Icon} from './resources/check.svg'

interface CheckButtonProps {
    done: boolean;
}
// ;
// 
const StyledCheck = styled(Icon)`
    width: 25px;
    fill: rgb(32, 201, 151);
`;

const StyledCheckButton = styled.div<{done: boolean}>`
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;
    border-radius: 50px;

    ${({done}) => css`
        border: 1px solid ${done ? 'rgb(32, 201, 151)' : 'rgb(206, 212, 218)'};
    `}
`

const CheckButton = ({done}: CheckButtonProps) => {
    return (
        <StyledCheckButton done={done}>
            {done && <StyledCheck/>}
        </StyledCheckButton>
    );
}

export default CheckButton;