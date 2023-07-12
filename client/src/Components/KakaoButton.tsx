import React from 'react';
import styled from 'styled-components';

const kakao = {
  redirect_uri: `${window.location.origin}/auth?social_provider=kakao`,
  rest_api_key: process.env.REACT_APP_REST_API_KEY,
};

const KakaoButton = () => {
  const auth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { redirect_uri, rest_api_key } = kakao;

    const kakaoAuth = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

    window.location.assign(kakaoAuth);
  };

  return (
    <>
      <Form onSubmit={auth}>
        <KakaoSignin>Kakao Signin</KakaoSignin>
      </Form>
    </>
  );
};

export default KakaoButton;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const KakaoSignin = styled.button`
  background-color: yellow;
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
`;
