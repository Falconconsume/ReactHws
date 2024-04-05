import React, { useEffect, useRef, useState } from "react";

export default function InputUser({ number, lifting, error }) {
  const [input, setInput] = useState("");

  const handleSearchUserSubmit = async (e) => {
    e.preventDefault();
    const req = await fetch(`https://api.github.com/users/${input}`);
    const res = await req.json();
    lifting(res);
  };

  return (
    <>
      <form onSubmit={handleSearchUserSubmit} className="formInputUser">
        <label>
          Choose <b>Player {number}</b> username:
        </label>
        <input
          type="text"
          defaultValue={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="error">{error}</p>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
