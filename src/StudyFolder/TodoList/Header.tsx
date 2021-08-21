import React, {useCallback, useMemo} from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoReducer';


const StyledHeader = styled.div`
    /* position: sticky; */
    /* width: 100%; */
    /* top:0; */
    padding: 48px 32px 24px;
    border-bottom: 1px solid rgb(233, 236, 239);
    /* background-color: white; */
    /* border-radius: 16px; */
`;
const Week = styled.div`
    margin-top: 4px;
    color: rgb(134, 142, 150);
    font-size: 21px;
`;
const WorkRest = styled.div`
    color: rgb(32, 201, 151);
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
`;
const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const Day = React.memo(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    const nowDay = `${year}년 ${month}월 ${day}일`;
    const d = [week[date.getDay()]];
    return (
        <div>
            <h1>{nowDay}</h1>
            <Week>{d}</Week>
        </div>
    );
});

const Header = () => {
    const state = useTodoState();
    
    const getWorksNum = useCallback( () => (
        state.todos.filter(todo => !todo.done).length
    ),[state.todos]);
    

    return (
        <StyledHeader>
            <Day/>
            <WorkRest>할일 {getWorksNum()}개 남음</WorkRest>
        </StyledHeader>
    );
}

export default React.memo(Header);