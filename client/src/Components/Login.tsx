import axios from 'axios';
import styled from 'styled-components';
import KakaoButton from './KakaoButton';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const signup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(e);
      axios.get('http://localhost:4000/signup').then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, []);
  return (
    <Wrapper>
      <KakaoButton />
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  button {
    cursor: pointer;
  }
`;
