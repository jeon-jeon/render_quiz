import { useState } from "react";

const Count = (props) => {
  // const [num, setNum] = useState(0);
  // const minus = () => setNum((prev) => (prev > 0 ? prev - 1 : prev));
  // const plus = () => setNum((prev) => prev + 1);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button className="border p-2" onClick={props.minus}>
        -
      </button>
      <span>{props.total}</span>
      <button className="border p-2" onClick={props.plus}>
        +
      </button>
    </div>
  );
};

export default Count;
