import { useState } from "react";

const Shape = () => {
  const [bgColor, setBgColor] = useState("white");
  const [colorText, setColorText] = useState("검정");

  const chgColor = () => {
    setBgColor((prev) => (prev == "black" ? "red" : "black"));
    setColorText((prev) => (prev == "검정" ? "빨강" : "검정"));
  };

  const [radius, setRadius] = useState("0px");
  const [radiusText, setRadiusText] = useState("둥글둥글");
  const chgRadius = () => {
    setRadius((prev) => (prev == "9999px" ? "0px" : "9999px"));
    setRadiusText((prev) => (prev == "둥글둥글" ? "네모네모" : "둥글둥글"));
  };

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid black",
          backgroundColor: bgColor,
          borderRadius: radius,
        }}
      ></div>

      <button className="border p-2" onClick={chgColor}>
        {colorText}
      </button>
      <button className="border p-2" onClick={chgRadius}>
        {radiusText}
      </button>
    </div>
  );
};

export default Shape;
