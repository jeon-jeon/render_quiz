const Subscribe = () => {
  const [sub, setSub] = useState("구독");
  const chgSub = () => {
    setSub((prev) => (prev == "구독🔔" ? "구독" : "구독🔔"));
  };
  return (
    <div>
      <button style={{ padding: "10px" }} onClick={chgSub}>
        {sub}
      </button>
    </div>
  );
};

export default Subscribe;
