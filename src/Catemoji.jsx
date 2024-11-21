import { useState } from "react";

const Catemoji = () => {
  // 😺😻, 😺😹, 😺😿

  const [btn1, setBtn1] = useState("😺");
  const chg1 = () => setBtn1((prev) => (prev == "😻" ? "😺" : "😻"));

  const [btn2, setBtn2] = useState("😺");
  const chg2 = () => setBtn2((prev) => (prev == "😹" ? "😺" : "😹"));

  const [btn3, setBtn3] = useState("😺");
  const chg3 = () => setBtn3((prev) => (prev == "😿" ? "😺" : "😿"));

  return (
    <div>
      <button onClick={chg1}>{btn1}</button>
      <button onClick={chg2}>{btn2}</button>
      <button onClick={chg3}>{btn3}</button>
    </div>
  );
};

export default Catemoji;
