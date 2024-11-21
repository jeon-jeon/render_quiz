const Price = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", fontWeight: 600 }}>
      {props.total * props.price}원
    </div>
  );
};

export default Price;
