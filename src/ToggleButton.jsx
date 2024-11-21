import { useState } from "react";

const ToggleButton = (props) => {
  const [isToggle, setIsToggle] = useState(props.text);
  const change = () => {
    setIsToggle((prev) =>
      prev == props.text ? props.text + props.emoji : props.text
    );
  };
  return (
    <div>
      <button style={{ padding: "10px" }} onClick={change}>
        {isToggle}
      </button>
    </div>
  );
};

export default ToggleButton;
