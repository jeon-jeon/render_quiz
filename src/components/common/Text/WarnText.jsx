import Text from "./Text";

const WarnText = (props) => {
  return (
    <Text
      style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}
      msg={props.msg}
    ></Text>
  );
};

export default WarnText;
