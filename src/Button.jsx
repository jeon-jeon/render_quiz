import { useState } from "react";
import CheckButton from "./CheckBox";

const Button = () => {
  const [] = useState();

  return (
    <div
      style={{
        borderRadius: "50px",
        padding: "10px",
        border: "1px solid black",
        backgroundColor: "grey",
      }}
    >
      확인
    </div>
  );
};

export default Button;
