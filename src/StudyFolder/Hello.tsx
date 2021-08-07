import React from 'react';
import styled, { css } from 'styled-components';


interface props {
    name?: string;
    color?: string;
    isSpecial?: boolean;
    children?: React.ReactNode;
}

const StyledHello = styled.div`

    ${({color}) => {
        return css`
            color: ${color};
        `;
    }}
`;

const Hello = ({name, color, isSpecial, children}: props) => {
    return (
        <StyledHello color={color}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
            {children}
        </StyledHello>
    );
}

Hello.defaultProps = {
    name: "이름없음",
}

export default Hello;