const Photo = (props) => {
  return (
    <div>
      <img
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "9999px",
          backgroundColor: "#dbdbdb",
          objectFit: "cover",
        }}
        src={props.imgSrc}
        alt=""
      />
    </div>
  );
};

export default Photo;
