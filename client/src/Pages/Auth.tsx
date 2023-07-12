import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  // const authMutation = async (authToken: string) => {
  //   const code = await axios
  //     .post('http://localhost:4000/auth', {
  //       authToken,
  //     })
  //     .then((res) => res.data);
  //   console.log(code);
  //   return code;
  // };
  // useEffect(() => {
  //   const authToken = new URL(window.location.href).searchParams.get('code');
  //   authToken && localStorage.setItem('authToken', authToken);

  //   try {
  //     if (!authToken) return;
  //     authMutation(authToken);
  //     console.log('end');
  //     navigate('/');
  //   } catch (err) {
  //     alert(err);
  //   }
  // }, []);

  return <>auth loading..</>;
};

export default Auth;
