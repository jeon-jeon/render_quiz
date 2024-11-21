const CheckBox = (props) => {
  return (
    <div
      onClick={props.change}
      style={{
        width: "fit-content",
        borderRadius: "9999px",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: props.checked ? "yellow" : "white",
      }}
    >
      ✔
    </div>
  );
};

export default CheckBox;
