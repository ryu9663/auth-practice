import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>홈</div>
      <Link to='/signin'>로그인화면으로</Link>
    </>
  );
};

export default Home;
