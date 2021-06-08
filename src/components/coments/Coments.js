/** @format */

import React, { useState } from "react";
import "./Coments.css";

const Coments = ({ coments, id }) => {
  const [posts, setPosts] = useState([]);

  const sendComent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="coments">
      <form>
        <input type="text" />
        <button onClick={sendComent} type="submit">
          Send
        </button>
      </form>
      <div className="coment">
        {coments.map((oneComent) => (
          <p>{oneComent}</p>
        ))}
      </div>
    </div>
  );
};

export default Coments;
