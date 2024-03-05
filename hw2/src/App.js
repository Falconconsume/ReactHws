import "./App.css";
import { cities } from "./data";
import List from "./components/List";
import AdditionalList from "./components/AdditionalList";

function App() {
  const color = ["blue", "grey", "black", "orange", "yellow"];
  return (
    <>
      <List cities={cities} color="lightblue" />
      <AdditionalList cities={cities} colors={color} />
    </>
  );
}

export default App;
