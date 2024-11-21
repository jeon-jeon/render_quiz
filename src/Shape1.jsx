import { useState } from "react";

const Shape1 = () => {
  const [size, setSize] = useState("100px");
  const chgSize = () => {
    setSize((prev) => (prev == "200px" ? "100px" : "200px"));
  };

  const [color, setColor] = useState("green");
  const chgColor = () => {
    setColor((prev) => {
      if (prev == "green") return "yellow";
      else if (prev == "yellow") return "red";
      else return "green";
    });
  };

  const colorMap = {
    green: "노랑",
    yellow: "빨강",
    red: "초록",
  };

  return (
    <>
      <div
        style={{
          width: size,
          height: size,
          border: "1px solid black",
          backgroundColor: color,
        }}
      ></div>
      <button
        style={{ border: "1px solid black", padding: "10px" }}
        onClick={chgSize}
      >
        {size == "200px" ? "작게" : "크게"}
      </button>
      <button
        style={{ border: "1px solid black", padding: "10px" }}
        onClick={chgColor}
      >
        {colorMap[color]}
      </button>
    </>
  );
};

export default Shape1;
