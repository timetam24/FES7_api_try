import { useState } from "react";
import JoinPage from "./Components/JoinPage";
import LoginPage from "./Components/LoginPage";

function App() {
  const [page, setPage] = useState(true);
  const handlePage = () => {
    setPage((prevPage) => {
      return !prevPage;
    });
  };

  const getMyinfo = async () => {
    const token = localStorage.getItem("token");
    const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";
    console.log(token);
    const res = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();
    console.log(json);
  };

  return (
    <div>
      <button type="button" onClick={getMyinfo}>
        내 정보 불러오기
      </button>
      {page ? (
        <LoginPage handlePage={handlePage} />
      ) : (
        <JoinPage handlePage={handlePage} />
      )}
    </div>
  );
}

export default App;
