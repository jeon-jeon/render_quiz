import { useState } from "react";

const Fruit = () => {
  // 😺😻, 😺😹, 😺😿

  const [btn1, setBtn1] = useState("😺");
  const chg1 = () => {
    setBtn1(() => {
      return btn1 == "😻" ? "😺" : "😻";
    });
  };

  const [btn2, setBtn2] = useState("😺");
  const chg2 = () => {
    setBtn2(() => {
      return btn2 == "😹" ? "😺" : "😹";
    });
  };

  const [btn3, setBtn3] = useState("😺");
  const chg3 = () => {
    setBtn3(() => {
      return btn3 == "😿" ? "😺" : "😿";
    });
  };

  return (
    <div>
      <button onClick={() => setBtn1(() => (btn1 == "😻" ? "😺" : "😻"))}>
        {btn1}
      </button>
      <button onClick={chg2}>{btn2}</button>
      <button onClick={chg3}>{btn3}</button>
    </div>
  );
};

export default Fruit;
