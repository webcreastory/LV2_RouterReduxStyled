import React, { useState } from 'react'; // React 라이브러리를 사용하기 위해서는 항상 React를 임포트해야 함
import User from './User';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';
import { useSelector } from 'react-redux';


// App이라는 함수형 컴포넌트 : React 애플리케이션의 진입점(entry point)
// 이 컴포넌트는 <Todo></Todo>라는 JSX를 반환 (Todo 컴포넌트를 렌더링하는 역할을 함)
function Todo() {
    const dispatch = useDispatch();

    const todos = useSelector((state) =>{
        return state.todos;
    })
    // 초기 상태 설정
    // useState 훅(Hook)을 사용하여 컴포넌트의 상태를 초기화
    // useState는 배열 형태의 반환값을 가지며
    //--- 첫번째 원소 users(상태 변수의 이름)는 상태값 자체, 두번째 원소 setUsers는 해당 상태를 업데이트하는 함수
    const [users, setUsers] = useState([
        // 초기 상태로 지정된 값은 배열
        // 각 원소는 하나의 Todo를 나타내는 객체
        // 객체에는 id(고유 식별자), title, text, isDine 속성
        { id: 1, title: '[과제] React Lv.1', text: 'My Todo List 제출', isDone: false },
        { id: 2, title: '[강의] 리액트 입문주차', text: '2회독_개발 블로그 정리', isDone: true },
    ]); // = 이 코드는 초기 화면에 렌더링될 때 users 상태가 초기화되고 해당 상태는 title과 text라는 2개의 Todo 객체를 가지고 있음
    // 이후에 이 상태를 업데이트하거나 활용하여 React 컴포넌트를 동적으로 변경할 수 있음

    // React 함수형 컴포넌트에서 useState 훅을 사용하여 2개의 상태 변수를 선언
    // 첫번째 상태 변수인 title을 선언하고 초기값을 빈 문자열로 설정(title은 현재 상태의 값, setTitle 함수를 사용해 이 상태를 업데이트)
    // 두번째 상태 변수인 text을 선언하고 초기값을 빈 문자열로 설정(text는 현재 상태의 값, setText 함수를 사용해 이 상태를 업데이트)
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    // = 이렇게 선언된 상태 변수들은 주로 사용자의 입력을 받거나, 컴포넌트 내에서의 상태를 관리하는 데 사용

    // 제목 입력값 변경 핸들러
    // React 함수형 컴포넌트에서 사용되는 event 핸들러 함수
    // titleChangeHandler라는 이름의 '함수형 변수'를 선언
    // 주로 입력 필드에서 발생하는 event(일반적으로 입력 내용이 변경될 때 발생하는 'onChange' event)를 처리
    const titleChangeHandler = (event) => {
        // 화살표 함수 문법을 사용하여 이벤트 핸들러 함수 정의(이벤트(event) 객체를 받아들이는 매개변수)
        setTitle(event.target.value); // setTitle 함수 호출(React 컴포넌트에서 title 상태 업데이트) ->
        // event.target.value 값을 setTitle 함수에 전달하여 컴포넌트의 title 상태 업데이트
    }; // event.target은 이벤트가 발생한 HTML 요소(주로 입력 필드)/.value는 해당 요소의 현재 값, 즉 사용자가 입력한 내용을 나타냄
    // = 주로 사용자가 입력 필드에 텍스트를 입력할 때마다 호출되어, 입력된 텍스트를 컴포넌트의 title 상태로 업데이트하는 역할
    // = 입력된 값을 상태로 관리하고, 필요에 따라 화면을 다시 렌더링하여 반영

    // 내용 입력값 변경 핸들러
    //textChangeHandler라는 이름의 함수형 변수를 선언
    // 주로 입력 필드에서 발생하는 이벤트(일반적으로 입력 내용이 변경될 때 발생하는 'onChange' 이벤트) 처리
    const textChangeHandler = (event) => {
        // 화살표 함수 문법을 사용하여 이벤트 핸들러 함수 정의
        // 매개변수 event는 이벤트 객체를 받아들이는 매개변수
        setText(event.target.value); // event.target.value는 이벤트가 발생한 HTML 요소(주로 입력 필드)의 현재 값,
        // 즉 사용자가 입력한 내용을 나타냄(이 값을 setText 함수에 전달하여 컴포넌트의 text 상태를 업데이트)
    }; // 사용자가 입력 필드에 텍스트를 입력할 때마다 호출되어, 입력된 텍스트를 컴포넌트의 text 상태로 업데이트하는 역할

    // <추가> 버튼 클릭시 카드 추가하기
    // clickAddButtonHandler 함수가 호출될 때마다, 새로운 사용자 정보를 만듦
    const clickAddButtonHandler = () => {
        const newUser = {
            //  newUser 객체를 생성하는데, 이 객체에는 다음과 같은 속성 포함(id, title, text, isDone)
            id: users.length + 1, // users 배열의 길이에 1을 더한 값으로 설정
            title: title, // title 변수에서 가져온 값으로 설정
            text: text, // text 변수에서 가져온 값으로 설정
            isDone: false, // 새로운 사용자의 상태를 나타냄(아직 완료되지 않았다는 것을 의미)
        };
        // setUsers 함수를 호출하여 users 배열 업데이트
        // setUsers([...users, newUser]);
        
        // 기존 users 배열과 새로 생성된 newUser 객체를 합친 새로운 배열을 생성하여 업데이트

        // <추가> 버튼 클릭 후 입력값 초기화
        //  입력 필드의 값을 변경한 후에 해당 값을 초기화
        dispatch(addTodo(title, text))
        setTitle('');
        setText('');
    };

    // Working 섹션에서 <삭제> 버튼 클릭 핸들러
    // clickRemoveButtonHandler 함수는 id라는 매개변수를 받음
    // 사용자가 지정한 id를 가진 항목을 삭제하기 위한 것
    const clickRemoveButtonHandler = (id) => {
        // filter 메서드를 사용하여 users 배열에서 조건을 만족하는 요소들만 새로운 배열인 newUsers에 포함
        // filter 함수는 각각의 user에 대해 주어진 조건을 확인하고,
        // user.id가 함수에 전달된 id와 일치하지 않는 요소들만 선택하여 새로운 배열을 생성
        // id와 일치하지 않는 사용자만을 남기고 필터링
        const newUsers = users.filter((user) => user.id !== id);
        // setUsers 함수를 호출하여 상태(state)를 업데이트
        // newUsers 배열은 이전 users 배열에서 특정 id를 가진 사용자를 제외한 새로운 배열
        // 새로운 사용자 목록으로 설정하여 이전 목록에서 해당 ID를 가진 사용자를 삭제
        setUsers(newUsers);
    };
    // <완료> 또는 <취소> 버튼 클릭시 상태 변경
    // toggleStatusFunction 함수는 id라는 매개변수를 받음
    const toggleStatusFunction = (id) => {
        // map 함수를 사용하여 users 배열의 각 요소를 새로운 배열인 updatedUsers로 변환
        // map() 함수는 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 함수가 반환하는 결과를 모아서 새로운 배열을 생성
        // ----- 배열을 순회하면서 각 요소에 동일한 작업을 적용하여 새로운 배열을 만들 때 유용
        const updatedUsers = users.map((user) => {
            // 만약 user.id가 함수에 전달된 id와 일치한다면, 해당 사용자의 isDone 속성을 반전시켜서 변경
            if (user.id === id) {
                // 객체 전개 연산자(...)를 사용하여 객체를 복사하고, 해당 객체의 isDone 속성을 토글(반전)시킴
                // 반전 연산자 !를 사용하여 user.isDone의 값을 뒤집고, 해당 값을 가지고 새로운 객체를 생성하여 반환
                // 그렇지 않은 경우에는 기존의 사용자 정보를 그대로 반환
                return { ...user, isDone: !user.isDone };
            }
            return user;
        }); //setUsers 함수를 호출하여 상태(state)를 업데이트
        setUsers(updatedUsers);
        // updatedUsers 배열은 이전 users 배열을 기반으로
        // --- 특정 id를 가진 사용자의 isDone 값을 토글(반전)시킨 새로운 배열
    };

    // Done 섹션에서 <삭제> 버튼 클릭 핸들러
    // clickRemoveDoneButtonHandler 함수는 id라는 매개변수를 받음
    // 특정 조건을 충족하는 사용자(isDone이 true인 사용자)를 제외하고 새로운 배열을 만듦
    const clickRemoveDoneButtonHandler = (id) => {
        // filter 함수를 사용하여 users 배열에서 조건을 만족하는 요소들만 새로운 배열인 newUsers에 포함시킴
        const newUsers = users.filter((user) => user.id !== id);
        // newUsers 배열은 이전 users 배열에서 특정 id를 가진 사용자를 제외한 새로운 배열
        // = id에 해당하는 사용자를 제거하고, 해당 사용자가 완료된 작업을 나타내는 isDone이 true인 경우에만 동작
        setUsers(newUsers);
    };

    // JSX(JavaScript XML, React에서 UI를 작성하기 위해 사용되는 JS 확장 문법)로 작성된 코드
    // 1. Todo List 구성 요소:
    // clickRemoveDoneButtonHandler, clickAddButtonHandler, titleChangeHandler, textChangeHandler,
    // toggleStatusFunction 함수들과 함께 <Button>과 <User> 컴포넌트를 사용하여 Todo List를 구성

    // 2. 화면 레이아웃 구성:
    // home-background, home-container, header, input-box, Working-body 등의 CSS 클래스를 사용하여 UI 스타일링
    // 헤더에는 My Todo List와 React라는 두 개의 텍스트 구성

    // 3. 두 부분으로 나누어진 Todo 리스트:
    // Working 부분은 isDone이 false인 항목들을 보여주고 있고,
    // Done 부분은 isDone이 true인 항목들을 보여줌
    // 두 부분에서 각각 filter 함수를 사용하여 users 배열을 필터링하고, 해당하는 부분에 맞는 항목들만을 보여줌
    // map 함수를 사용하여 각각의 Todo 항목을 User컴포넌트로 변환하고, 해당 컴포넌트들을 UI에 렌더링 함

    return (
        <HomeBackground>
            <HomeContainer>
                <Header>
                    <span>My Todo List</span>
                    <span>React</span>
                </Header>

                <InputBox>
                    제목 &nbsp;
                    <InputStyle value={title} onChange={titleChangeHandler} />
                    내용 &nbsp;
                    <InputStyle value={text} onChange={textChangeHandler} />
                    <AddButton onClick={clickAddButtonHandler}>추가하기</AddButton>
                </InputBox>

                <TitleH1>🔥 Working</TitleH1>
                <BodyStyle>
                    {todos
                        .filter((item) => !item.isDone)
                        .map(function (item) {
                            return (
                                <User
                                    key={item.id}
                                    item={item}
                                    removefunction={clickRemoveButtonHandler}
                                    toggleStatusFunction={toggleStatusFunction}
                                />
                            );
                        })}
                </BodyStyle>

                <TitleH1>👍 Done</TitleH1>
                <BodyStyle>
                    {todos
                        .filter((item) => item.isDone)
                        .map(function (item) {
                            return (
                                <User
                                    key={item.id}
                                    item={item}
                                    removefunction={clickRemoveDoneButtonHandler}
                                    toggleStatusFunction={toggleStatusFunction}
                                />
                            );
                        })}
                </BodyStyle>
            </HomeContainer>
        </HomeBackground>
    );
}

const HomeBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(45deg, rgb(51 43 43 / 75%), rgb(20 19 20 / 61%)),
        url('https://miro.medium.com/v2/resize:fit:1400/1*QDQvlCg420lzRElCK4AYhw.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const HomeContainer = styled.div`
    width: 1200px;
    margin: 0px auto 0px auto;
`;
const Header = styled.div`
    height: 50px;
    width: 1100px;

    padding: 10px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 50px;
    font-weight: 700;
    color: rgb(18, 78, 89);
`;
const InputBox = styled.div`
    background-color: rgba(44, 40, 40, 0.921);
    border-radius: 6px;

    height: 100px;
    width: 1100px;

    padding-left: 30px;
    padding-right: 30px;

    color: white;
    font-size: 25px;
    font-weight: 800;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const InputStyle = styled.input`
    height: 40px;
    width: 280px;

    margin-right: auto;
    padding-left: 10px;

    border-radius: 7px;
    border: none;

    font-size: 18px;
    font-weight: 600;
`;
const AddButton = styled.button`
    width: 180px;
    height: 45;
    padding: 10px;

    background-color: rgb(71, 163, 182);

    border: none;
    border-radius: 5px;

    color: white;
    font-size: 20px;
    font-weight: 800;

    &:hover {
    font-size: 22px;
    font-weight: 900;
    background-color: red;
    };
`;
const TitleH1 = styled.h1`
    margin-right: 1000px;
    margin-bottom: 15px;

    font-size: 30px;
    font-weight: 800;
    color: white;
`;
const BodyStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    padding-left: 30px;
`;
// App 컴포넌트를 모듈의 기본으로 내보냄
export default Todo;
// App 컴포넌트는 Todo 컴포넌트를 렌더링하고,
// 애플리케이션의 최상위 레벨에 위치하여
// 각 컴포넌트들을 조합하고 화면에 보여주는 역할을 함
