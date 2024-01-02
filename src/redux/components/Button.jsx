import React from 'react';
// 버튼 컴포넌트(함수형 컴포넌트)
// Button이라는 이름의 함수형 컴포넌트 선언
// 이 컴포넌트는 주로 버튼 역할을 하며, 두 개의 속성(props)을 받아들임
// clickAddButtonHandler: 이는 버튼이 클릭되었을 때 실행될 이벤트 핸들러 함수
// children: 이는 버튼 내에 포함될 내용(일반적으로 텍스트 또는 다른 React 엘리먼트)
const Button = ({ clickAddButtonHandler, children }) => {
    // 이 부분은 컴포넌트의 렌더링을 정의
    // <button> HTML 엘리먼트 반환
    // onClick={clickAddButtonHandler}는 버튼이 클릭되었을 때 실행될 이벤트 핸들러를 정의
    // clickAddButtonHandler로 전달된 함수가 클릭 이벤트에 바인딩되어 해당 함수가 실행됨
    // {children}: 이는 버튼 내에 포함될 내용을 나타냄(버튼 내의 텍스트로 표시됨)
    return <button onClick={clickAddButtonHandler}>{children}</button>;
}; // =  Button 컴포넌트를 정의하여, 버튼을 렌더링하고 클릭 이벤트에 대한 핸들러를 받아 처리할 수 있는 컴포넌트

// 정의한 Button 컴포넌트를 외부에서 사용할 수 있도록 내보낸다.
export default Button;
