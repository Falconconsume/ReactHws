import React from "react";

export default function Button({
  user1,
  user2,
  handleBattleClick,
  resetBattle = false,
  handleRestartClick,
}) {
  return (
    <>
      {user1.hasOwnProperty("login") &&
        user2.hasOwnProperty("login") &&
        (resetBattle == 0 ? (
          <button onClick={handleBattleClick} className="btn-fight">
            ⚔️ Battle
          </button>
        ) : (
          <button onClick={handleRestartClick} className="btn-fight">
            🔄Restart
          </button>
        ))}
    </>
  );
}
