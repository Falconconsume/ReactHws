import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import InputUser from "./components/InputUser";
import InfoUser from "./components/InfoUser";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const [user1, setUser1] = useState([]);
  const [user2, setUser2] = useState([]);
  const [resetBtn, setResetBtn] = useState(true);
  const [detailInfoOfUser1, setDetailInfoOfUser1] = useState([]);
  const [detailInfoOfUser2, setDetailInfoOfUser2] = useState([]);
  const [infoTotal1, setInfoTotal1] = useState(0);
  const [infoTotal2, setInfoTotal2] = useState(0);
  const [resultOfBattle, setResultOfBattle] = useState(false);
  const [resetBattle, setResetBattle] = useState(false);
  const [battleClicked, setBattleClicked] = useState(false);

  useEffect(() => {
    if (battleClicked) {
      setResultOfBattle(true);
    }
  }, [battleClicked]);

  const handleBattleClick = useCallback(async () => {
    setResetBtn(false);
    const [resUser1, resUser2] = await Promise.all([
      fetch(
        `https://api.github.com/users/${user1.login}/repos?per_page=100`
      ).then((res) => res.json()),
      fetch(
        `https://api.github.com/users/${user2.login}/repos?per_page=100`
      ).then((res) => res.json()),
    ]);
    setDetailInfoOfUser1(resUser1);
    setDetailInfoOfUser2(resUser2);
    setResetBattle(true);
    setBattleClicked(true);
  }, [user1, user2]);

  const handleRestartClick = useCallback(() => {
    setUser1([]);
    setUser2([]);
    setResetBtn(true);
    setDetailInfoOfUser1([]);
    setDetailInfoOfUser2([]);
    setInfoTotal1(0);
    setInfoTotal2(0);
    setResetBattle(false);
    setResultOfBattle(false);
    setResetBattle(false);
    setBattleClicked(false);
  }, []);

  const winner = useMemo(() => {
    return infoTotal1 > infoTotal2;
  }, [infoTotal1, infoTotal2]);

  const loser = useMemo(() => {
    return infoTotal1 < infoTotal2;
  }, [infoTotal1, infoTotal2]);

  return (
    <>
      <Header />
      <div className="inputs">
        {user1.length === 0 ? (
          <InputUser lifting={setUser1} number="1" />
        ) : user1.hasOwnProperty("login") ? (
          <>
            {resultOfBattle &&
            detailInfoOfUser1 != 0 &&
            detailInfoOfUser2 != 0 ? (
              <div className="resultBlock">
                {winner ? (
                  <p className="txtResult">Winner 🥳 </p>
                ) : (
                  <p className="txtResult">Loser 🥵</p>
                )}
                <InfoUser
                  detailInfoOfUser={detailInfoOfUser1}
                  resetBtn={resetBtn}
                  setReset={setUser1}
                  user={user1}
                  number="1"
                  lifting={setInfoTotal1}
                />
              </div>
            ) : (
              <>
                <InfoUser
                  detailInfoOfUser={detailInfoOfUser1}
                  resetBtn={resetBtn}
                  setReset={setUser1}
                  user={user1}
                  number="1"
                  lifting={setInfoTotal1}
                />
              </>
            )}
          </>
        ) : (
          <InputUser
            lifting={setUser1}
            user={user1}
            number="1"
            error="We can`t find that user!"
          />
        )}
        {user2.length === 0 ? (
          <InputUser lifting={setUser2} number="2" />
        ) : user2.hasOwnProperty("login") ? (
          <>
            {resultOfBattle &&
            detailInfoOfUser1 != 0 &&
            detailInfoOfUser2 != 0 ? (
              <div className="resultBlock">
                {loser ? (
                  <p className="txtResult">Winner 🥳 </p>
                ) : (
                  <p className="txtResult">Loser 🥵</p>
                )}
                <InfoUser
                  detailInfoOfUser={detailInfoOfUser2}
                  resetBtn={resetBtn}
                  setReset={setUser2}
                  user={user2}
                  number="1"
                  lifting={setInfoTotal2}
                />
              </div>
            ) : (
              <>
                <InfoUser
                  detailInfoOfUser={detailInfoOfUser2}
                  resetBtn={resetBtn}
                  setReset={setUser2}
                  user={user2}
                  number="1"
                  lifting={setInfoTotal2}
                />
              </>
            )}
          </>
        ) : (
          <InputUser
            lifting={setUser2}
            user={user2}
            number="2"
            error="We can`t find that user!"
          />
        )}
      </div>
      <Button
        setResetBattle={setResetBattle}
        resetBattle={resetBattle}
        user1={user1}
        user2={user2}
        handleBattleClick={handleBattleClick}
        handleRestartClick={handleRestartClick}
      />
    </>
  );
}

export default App;
