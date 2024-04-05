import React, { useEffect } from "react";

export default function InfoUser({
  user,
  setReset,
  resetBtn,
  detailInfoOfUser,
  lifting,
}) {
  let total =
    Number(user.followers) +
    detailInfoOfUser.reduce((acc, el) => acc + Number(el.stargazers_count), 0);
  let stars = detailInfoOfUser.reduce(
    (acc, el) => acc + Number(el.stargazers_count),
    0
  );

  useEffect(() => {
    lifting(total);
  }, [total]);

  return (
    <div className="infoSection">
      <img className="img" src={user.avatar_url} alt="/" />
      <p className="login">{user.login}</p>
      {detailInfoOfUser != 0 ? (
        <>
          <p>😼 Followers: {user.followers}</p>
          <p>👑 Repositories stars: {stars}</p>
          <p>
            <strong>🙉 Total score: {total}</strong>
          </p>
        </>
      ) : null}

      {resetBtn && (
        <button onClick={() => setReset([])} className="btn-reset">
          Reset
        </button>
      )}
    </div>
  );
}
