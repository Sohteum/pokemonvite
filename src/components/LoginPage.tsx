import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { pokeUserNameAtom } from "../atom/atom";
import logo from "../assets/logo.png"

const LoginPage = () => {

  const [username, setUsername] = useRecoilState(pokeUserNameAtom);
  const [password, setPassword] = useState("");
  const [tmpUsername, setTmpUsername] = useState("");
  const navi = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(false);

  // 로그인 상태 유지를 위한 useEffect
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const submintHandler = (e: any) => {
    e.preventDefault()
  }

  const handleLogin = () => {
    localStorage.setItem("username", tmpUsername);
    setUsername(tmpUsername);
    navi("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navi("/");
  };

  const handleHome = () => {
    navi("/");
  }

  return (
    <div className="loginPage">
      <div className="loginForm">
        <img className="logoImg" src={logo} alt="" />

        {username ? (
          <div>
            <p>로그인 되었습니다. 사용자: {username}</p>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <form onSubmit={submintHandler}>
            <p className="inputText">이메일을 입력하세요</p>
            <input
              className="input email"
              type="email"
              placeholder="email"
              value={tmpUsername}
              onChange={(e) => setTmpUsername(e.target.value)}
            />
            <p className="inputText">비밀번호를 입력하세요</p>
            <input
              className="input password"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signin" onClick={handleLogin}>로그인</button>
            <button className="signin" onClick={handleHome}>메인 페이지로 이동하기</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

//로그인 버튼을 누르면,
//1. 로그인정보가 입력되지 않으면 넘어가지않기
