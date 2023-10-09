import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { pokeUserNameAtom } from "../atom/atom";

const LoginPage = () => {

  const [username, setUsername] = useRecoilState(pokeUserNameAtom);
  const [password, setPassword] = useState("");
  const [tmpUsername, setTmpUsername] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(false);
  const navi = useNavigate();

  // 로그인 상태 유지를 위한 useEffect
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      // setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // 실제 로그인 로직은 백엔드와 통합해야 합니다.
    // 여기에서는 간단히 localStorage를 사용하여 로그인 상태를 유지합니다.
    localStorage.setItem("username", tmpUsername);
    setUsername(tmpUsername);
    // setIsLoggedIn(true);
    navi("/"); //홈으로 이동
  };

  const handleLogout = () => {
    // 로그아웃 시 로컬 스토리지에서 사용자 정보를 삭제합니다.
    localStorage.removeItem("username");
    // setIsLoggedIn(false);
    setUsername("");
    navi("/"); //홈으로 이동
  };

  return (
    <div>
      {username ? (
        <div>
          <p>로그인 되었습니다. 사용자: {username}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>

          <input
            className="email"
            type="email"
            placeholder="사용자 이름"
            value={tmpUsername}
            onChange={(e) => setTmpUsername(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

//로그인 버튼을 누르면,
//1. 포켓몬 페이지로 다시 이동하기
//2. 포켓몬 페이지의 상단에 유저 이름이 나오기
//3. 포켓몬 페이지의 로그인 버튼이 로그아웃으로 바뀌기
