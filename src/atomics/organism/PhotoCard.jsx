import PhotoInfo from "../molecules/PhotoInfo";
import TextInfo from "../molecules/TextInfo";

const PhotoCard = (props) => {
  return (
    <article
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <PhotoInfo {...props}></PhotoInfo>
      <TextInfo {...props}></TextInfo>
    </article>
  );
};

export default PhotoCard;
