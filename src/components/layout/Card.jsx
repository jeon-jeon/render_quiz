import RoomImg from "../common/RoomImg";
import RoomType from "../common/RoomType";
import RoomTitle from "../common/RoomTitle";
import RoomDesc from "../common/RoomDesc";
import Price from "../common/Price";
import Plus from "../common/Plus";

const Card = (props) => {
  return (
    <article className="flex p-3 gap-3 items-center">
      <div>
        <RoomImg imgSrc={props.imgSrc}></RoomImg>
      </div>
      <div className="flex flex-col gap-2">
        <Price
          priceTypeName={props.priceTypeName}
          priceTitle={props.priceTitle}
        ></Price>
        <RoomType roomTypeName={props.roomTypeName}></RoomType>
        <RoomTitle roomTitle={props.roomTitle}></RoomTitle>
        <RoomDesc roomDesc={props.roomDesc}></RoomDesc>
        <Plus></Plus>
      </div>
    </article>
  );
};

export default Card;
