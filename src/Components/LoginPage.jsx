import React, { useState } from "react";
import axios from "axios";

const LoginPage = ({ handlePage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user/login";
    const reqUrl = baseUrl + reqPath;

    try {
      await axios({
        method: "post",
        url: reqUrl,
        data: {
          user: {
            email: email,
            password: password,
          },
        },
      }).then((res) => {
        console.log("로그인에 성공했습니다!");
        const token = res.data.user.token;
        // //로컬스토리지에 토큰 저장하기
        localStorage.setItem("token", token);
      });
    } catch (error) {
      console.error();
      alert("로그인에 실패했습니다.");
    }
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <>
      <h1>로그인</h1>
      <section>
        <h2>이메일, 비밀번호 입력하는 곳</h2>
        <form onSubmit={submitLogin}>
          <input
            type="text"
            placeholder="이메일 입력"
            onChange={inputEmail}
            value={email}
          />
          <input
            type="text"
            placeholder="비밀번호 입력"
            onChange={inputPassword}
            value={password}
          />
          <button>로그인</button>
          <button type="button" onClick={handlePage}>
            회원가입
          </button>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
