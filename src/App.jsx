import { useState } from "react";
import CheckBox from "./CheckBox";

function App() {
  // const [arr, setArr] = useState([
  //   { amount: 0, price: 20000 },
  //   { amount: 0, price: 15900 },
  // ]);

  const [chkList, setChkList] = useState([false, false]);
  const changeOne = () => {
    setChkList((prev) => {
      const newCheckedList = [...prev];
      newCheckedList[0] = !newCheckedList[0];
      return newCheckedList;
    });
  };

  const changeTwo = () => {
    setChkList((prev) => {
      const newCheckedList = [...prev];
      newCheckedList[1] = !newCheckedList[1];
      return newCheckedList;
    });
  };

  return (
    <div className="App">
      <CheckBox change={changeOne} checked={chkList[0]}></CheckBox>
      <CheckBox change={changeTwo} checked={chkList[1]}></CheckBox>
      {/* <ItemCounter init={arr[0].amount} price={arr[0].price}></ItemCounter>
      <ItemCounter init={arr[1].amount} price={arr[1].price}></ItemCounter> */}
      {/* <Count></Count>
      <Price price={1000}></Price> */}
      {/* <ToggleButton text="좋아요" emoji="❤"></ToggleButton>
      <ToggleButton text="구독" emoji="🔔"></ToggleButton> */}
      {/* <LikeButton></LikeButton>
      <Shape1></Shape1> */}
      {/* <Shape></Shape>
      <Count></Count>
      <Catemoji></Catemoji> */}
      {/* <Button></Button> */}
      {/* <WarnText msg="커피"></WarnText>
      <InfoText msg="커피"></InfoText> */}

      {/* {dummy.map((v) => (
        <PhotoCard {...v}></PhotoCard>
      ))} */}
      {/* {roomList.map((v) => (
        <Card imgSrc={v.imgUrlList[0]} {...v}></Card>
      ))} */}
    </div>
  );
}

export default App;
