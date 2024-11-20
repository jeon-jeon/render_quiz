import Text from "./Text";

const InfoText = (props) => {
  return (
    <Text
      style={{ color: "green", fontSize: "18px", fontWeight: "normal" }}
      msg={props.msg}
    ></Text>
  );
};

export default InfoText;
