import { useState } from "react";
import Count from "./Count";
import Price from "./Price";

const ItemCounter = (props) => {
  const [total, setTotal] = useState(props.init);

  const minus = () => setTotal((prev) => (prev > 0 ? prev - 1 : prev));
  const plus = () => setTotal((prev) => prev + 1);

  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        backgroundColor: "#dbdbdb",
        padding: "10px",
        justifyContent: "space-between",
      }}
    >
      <Count minus={minus} plus={plus} total={total}></Count>
      <Price total={total} price={props.price}></Price>
    </div>
  );
};

export default ItemCounter;
