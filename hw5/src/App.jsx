import { useEffect, useState } from "react";
import "./App.css";
import FirstBlock from "./components/FirstBlock.jsx";
import SecondBlock from "./components/SecondBlock.jsx";
import ThirdBlock from "./components/ThirdBlock.jsx";

function App() {
  const [data, setData] = useState([]);
  const [secondBlockData, setSecondBlockData] = useState([]);
  const [thirdBlockData, setThirdBlockData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://65ef5bb3ead08fa78a5055fb.mockapi.io/list`
      );
      const json = await res.json();
      setData([...json]);
    })();
  }, []);

  const handleTransferFromFirstToSecondBlock = () => {
    const itemToTransfer = data[0];
    setSecondBlockData([itemToTransfer, ...secondBlockData]);
    const remainingData = data.filter((item) => item.id !== itemToTransfer.id);
    setData(remainingData);
  };

  const handleTransferFromSecondToThirdBlock = () => {
    const itemToTransfer = secondBlockData[0];
    setThirdBlockData([itemToTransfer, ...thirdBlockData]);
    const remainingData = secondBlockData.filter(
      (item) => item.id !== itemToTransfer.id
    );
    setSecondBlockData(remainingData);
  };

  const handleTransferBackFromSecondToFirst = () => {
    const itemToTransfer = secondBlockData[0];
    setData([itemToTransfer, ...data]);
    const remainingData = secondBlockData.filter(
      (item) => item.id !== itemToTransfer.id
    );
    setSecondBlockData(remainingData);
  };

  const handleDeleteTitle = async (id) => {
    try {
      await fetch(`https://65ef5bb3ead08fa78a5055fb.mockapi.io/list/${id}`, {
        method: "DELETE",
      });
      setThirdBlockData((prevState) => {
        return prevState.filter((item) => item.id !== id);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <FirstBlock
        data={data}
        setData={setData}
        handleTransferFromFirstToSecondBlock={
          handleTransferFromFirstToSecondBlock
        }
      />
      <SecondBlock
        secondBlockData={secondBlockData}
        handleTransferFromSecondToThirdBlock={
          handleTransferFromSecondToThirdBlock
        }
        handleTransferBackFromSecondToFirst={
          handleTransferBackFromSecondToFirst
        }
      />
      <ThirdBlock
        handleDeleteTitle={handleDeleteTitle}
        thirdBlockData={thirdBlockData}
      />
    </div>
  );
}

export default App;
