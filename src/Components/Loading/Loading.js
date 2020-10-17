import React from "react";
import { css } from "@emotion/core";

import FadeLoader from "react-spinners/FadeLoader";

const Loading = () => {
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  height: 4;
  width: 100;
  radius: 10;
  margin: 2;
  

`;
  return (
    <div
      className="test"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <FadeLoader css={override} size={60} color={"orange"} />
    </div>
  );
};

export default Loading;
