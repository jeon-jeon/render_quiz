import Job from "../atom/Job";
import Name from "../atom/Name";

const TextInfo = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "10px",
      }}
    >
      <Name name={props.name}></Name>
      <Job job={props.job}></Job>
    </div>
  );
};

export default TextInfo;
