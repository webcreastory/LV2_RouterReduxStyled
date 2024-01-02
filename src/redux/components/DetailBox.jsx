import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Detail() {
    const navigate = useNavigate();
    const params = useParams();

    const todos = useSelector((state) => {
        return state.todos;
    });

    const todo = todos.find((item) => {
        return item.id === params.id;
    });

    return (
        <HomeBackground>
            <HomeContainer>
                <DetailBox>
                    <h1>상세 페이지 정보</h1>
                    <h3> 번호 : {todo.id}</h3>
                    <h3> 제목 : {todo.title}</h3>
                    <h3> 내용 : {todo.text}</h3>
                    <BackButton
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        Home
                    </BackButton>
                </DetailBox>
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
const BackButton = styled.button`
    width: 280px;
    height: 65;
    padding: 10px;

    background-color: red;

    border: none;
    border-radius: 5px;

    color: white;
    font-size: 22px;
    font-weight: 800;

    &:hover {
    font-size: 23px;
    font-weight: 900;
    background-color: rgb(71, 163, 182);
    };
`;
const DetailBox = styled.div`
    width: 750px;
    height: 550px;
    border: 5px solid white;
    border-radius: 10px;

    padding: 40px;
    margin-top: 80px;

    color: white;
    font-size: 22px;
    font-weight: 700;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export default Detail;
