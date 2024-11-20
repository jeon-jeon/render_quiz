const Price = (props) => {
  // priceTypeName+priceTitle
  return (
    <div className="flex text-lg font-bold gap-1">
      <span>{props.priceTypeName}</span>
      <span>{props.priceTitle}</span>
    </div>
  );
};

export default Price;
