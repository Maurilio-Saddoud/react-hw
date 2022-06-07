import FirstComponentContainer from "./containers/firstComponentContainer";
import Counter from "./components/CounterComponent";
import RainbowComponent from "./components/rainbowComponent";
import FormComponent from "./containers/formContainer";

function App() {
  return (
    <div>
      <FirstComponentContainer />
      <hr/>
      <Counter />
      <hr />
      <RainbowComponent/>
      <hr/>
      <FormComponent />
    </div>


  );
}

export default App;
