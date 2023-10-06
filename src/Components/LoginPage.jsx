import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user/login";
    const reqUrl = baseUrl + reqPath;

    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };

    //로그인해서 token 꺼내기
    const res = await fetch(reqUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const json = await res.json();
    console.log(json);
    const token = json.user.token;
    console.log(token);

    //로컬스토리지에 토큰 저장하기
    localStorage.setItem("token", token);
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
        </form>
      </section>
    </>
  );
};

export default LoginPage;
