import { useState } from "react";

const Button = () => {
  const [text, setText] = useState("🍎");

  const change = () => {
    setText(() => {
      return text == "🍌" ? "🍎" : "🍌";
    });
  };

  return (
    <button className="border p-3" onClick={change}>
      {text}
    </button>
  );
};

export default Button;
