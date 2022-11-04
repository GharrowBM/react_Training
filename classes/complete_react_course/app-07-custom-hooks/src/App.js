import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  return (
    <>
    <ForwardCounter number={0}/>
    <BackwardCounter number={0}/>
    </>
  );
}

export default App;
