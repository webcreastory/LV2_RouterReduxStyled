// React 라이브러리를 현재 파일에서 사용하겠다고 선언
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { removeTodo, switchTodo } from '../modules/todos';

// User라는 함수형 컴포넌트
// ES6의 비구조화 할당을 사용하여 컴포넌트의 props를 바로 받아옴
const User = ({ item }) => {
    const dispatch = useDispatch();
    return (
        // React에서 리스트를 렌더링할 때 각 요소에 고유한 key를 지정해야 함
        // item.id를 키로 사용
        // item.isDone이 true인 경우에만 done 클래스가 추가됨(완료된 항목은 스타일링을 위해 done 클래스를 받음)
        // item 객체에 있는 title과 text 값을 출력
        // <div key={item.id} className={`todo-container ${item.isDone ? 'done' : ''}`}>
        <TodoContainer key={item.id} className={item.isDone ? 'done' : ''}>
            <StLink to={`/${item.id}`} key={item.id}>
                상세보기
            </StLink>
            <br />
            {item.title}
            <br />
            {item.text}
            <TodoDiv>
                <BtncontainerBtn onClick={() => dispatch(removeTodo(item.id))}>삭제하기</BtncontainerBtn>
                <BtncontainerBtn onClick={() => dispatch(switchTodo(item.id))}>
                    {item.isDone ? '취소' : '완료'}
                </BtncontainerBtn>
            </TodoDiv>
        </TodoContainer>
        // 버튼을 클릭하면 removefunction이 호출되고, 해당 item의 id가 전달 -> 이를 통해 해당 아이템이 삭제되는 함수를 실행
    ); // 버튼 텍스트를 item.isDone의 상태에 따라 다르게 표시
    // item.isDone이 true라면 '취소'라는 텍스트가 보이며, 클릭 시 toggleStatusFunction이 호출
}; // item.isDone이 false라면 '완료'라는 텍스트가 보이고, 클릭 시 toggleStatusFunction이 호출

const TodoContainer = styled.div`
    width: 350px;
    height: 250px;
    border: 5px solid white;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 800;
    color: white;
`;
const BtncontainerBtn = styled.button`
    width: 100px;
    height: 40;
    padding: 10px;
    margin: 10px;
    margin-top: 10px;

    background-color: red;

    border: none;
    border-radius: 5px;

    color: white;
    font-size: 16px;
    font-weight: 900;

    &:hover {
        background-color: black;
        font-size: 16px;
    }
`;
const TodoDiv = styled.div`
    margin-top: 30px;
`;
const StLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-weight: 900;
    color: red;

    &:hover {
        cursor: pointer;
        color: black;
    }
`;

export default User;
// User 컴포넌트는 각 Todo 항목을 렌더링하고, 해당 항목의 삭제와 상태 변경을 담당하는 버튼을 보여줌
// 설정된 item prop으로부터 해당 항목의 정보를 받아와 UI로 표시하고,
// removefunction과 toggleStatusFunction을 호출하여 해당 항목의 삭제 및 상태 변경을 처리
