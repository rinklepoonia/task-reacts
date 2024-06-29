import "./App.css";
import Effects from "./components/Effects";
import FetchPratice from "./components/FetchPratice";
import HookReducer from "./components/HookReducer";
import JsMail from "./components/JsMail";
import Validation from "./components/Validation";
import Pratice from "./components/Pratice";

function App() {
  return (
    <div className="App">
      <Validation />
      <JsMail />
      <Effects />
      <HookReducer />
      <FetchPratice />
      {/* <Pratice/> */}
    </div>
  );
}

export default App;
