import FirstComponentContainer from "./containers/firstComponentContainer";
import Counter from "./components/CounterComponent";
import RainbowComponent from "./components/rainbowComponent";
import ColorComponent from "./components/rainbowComponent/colorComponent";

function App() {
  return (
    <div>
      <FirstComponentContainer />
      <hr/>
      <Counter />
      <hr />
      <RainbowComponent/>
    </div>


  );
}

export default App;
