import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //   // const [IsLogged, setIsLogged] = useRecoilState(LoginStateAtom);

  //   // const onClickLoginHandler=()=>{
  //   //     setIsLogged()
  //   //   }
  //   //   const [form, setForm] = useRecoilState<any>(LoginStateAtom);

  //   const [id, setId] = useState('');
  //   const [password, setPassword] = useState('');

  //   const onSigninHandler = (e: any) => {
  //     e.prevent.default();
  //     // if (id !== ""  && password !== "")
  //     //   navigate("/");
  //     }

  //   return (
  //     <div className="loginPage">
  //       <form className="loginForm" onSubmit={onSigninHandler}>
  //         <div className="logoImg">
  //           <img
  //             src={process.env.PUBLIC_URL+"/logo.png"}
  //             alt="logo img"
  //           />
  //         </div>
  //         <p className="text">Email</p>
  //         <p>
  //           <input
  //             className="input"
  //             type="email"
  //             value={id}
  //             onChange={(e: any) => {
  //               setId(e.target.value);
  //             }}
  //             required
  //           />
  //         </p>
  //         <p className="password">Password</p>
  //         <p>
  //           <input
  //             className="input"
  //             type="password"
  //             value={password}
  //             onChange={(e: any) => {
  //               setPassword(e.target.value);
  //             }}
  //             required
  //           />
  //         </p>
  //         <button className="signin" type="submit">login</button>
  //       </form>
  //     </div>
  //   );
  // };

  //   const [userName, setUserName] = useRecoilState(LoginStateAtom);
  //   // useSetRecoilState : 상태를 업데이트하는 setter 함수.
  //   // 현재 로그인한 userName을 전역으로 관리한다.
  //   const [input, setInput] = useState("");
  //   const [state, setState] = useState({
  //     isLogined: false,
  //     userName: "",
  //   });
  //   const loginText = state.isLogined ? "LOGOUT" : "LOGIN";

  //   function onChangeInputHandler(e: any) {
  //     const text = e.target.value;
  //     setInput(text);
  //   }

  //   function onClickSubmitHandler(e: any) {
  //     e.preventDefault();
  //     if (!state.isLogined) {
  //       setState({
  //         userName: input,
  //         isLogined: true,
  //       });
  //       setUserName(userName);
  //       return;
  //     }
  //     setState({
  //       isLogined: false,
  //       userName: "",
  //     });
  //   }

  //   const inputText = <input type="text" onChange={onChangeInputHandler} />;

  //   return (
  //     <div>
  //       <form>
  //         {state.isLogined ? <h2>{state.userName}</h2> : inputText}
  //         <button type="button" onClick={onClickSubmitHandler}>
  //           {loginText}
  //         </button>
  //       </form>
  //     </div>
  //   );
  // };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navi = useNavigate();

  // 로그인 상태 유지를 위한 useEffect
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // 실제 로그인 로직은 백엔드와 통합해야 합니다.
    // 여기에서는 간단히 localStorage를 사용하여 로그인 상태를 유지합니다.
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
    navi("/"); //홈으로 이동
  };

  const handleLogout = () => {
    // 로그아웃 시 로컬 스토리지에서 사용자 정보를 삭제합니다.
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
    navi("/"); //홈으로 이동
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>로그인 되었습니다. 사용자: {username}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
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
