import Button from "./components/common/Button/Button";
import Fruit from "./Fruit";

function App() {
  return (
    <div className="App">
      <Fruit></Fruit>
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
