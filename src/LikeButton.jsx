import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState("좋아요");
  const chgLike = () => {
    setLike((prev) => (prev == "좋아요❤" ? "좋아요" : "좋아요❤"));
  };
  return (
    <div>
      <button style={{ padding: "10px" }} onClick={chgLike}>
        {like}
      </button>
    </div>
  );
};

export default LikeButton;
