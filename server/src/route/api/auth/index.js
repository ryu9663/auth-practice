const axios = require('axios');

const auth = async (req, res) => {
  const { authToken } = req.body;

  try {
    const kakaoResponse = await axios
      .post(
        'https://kauth.kakao.com/oauth/token',
        {},
        {
          header: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          params: {
            grant_type: 'authorization_code',
            client_id: process.env.KAKAO_REST_API_KEY,
            code: authToken,
            redirect_uri: `http://localhost:3000/auth?social_provider=kakao`,
          },
        }
      )
      .then((res) => res.data.access_token);
    console.log('카카오응답', kakaoResponse);
    // return kakaoResponse;
    res.send(kakaoResponse);
  } catch (err) {
    console.log('에러', err);
  }
};

module.exports = auth;
