import "./App.css";
import Effects from "./components/Effects";
import FetchPratice from "./components/FetchPratice";
import HookReducer from "./components/HookReducer";
import JsMail from "./components/JsMail";
import Validation from "./components/Validation";
import Pratice from "./components/Pratice";
import ParamTabs from "./components/ParamTabs";

function App() {
  return (
    <div className="App">
      <Validation />
      <JsMail />
      <Effects />
      <HookReducer />
      <FetchPratice />
      {/* <Pratice/> */}
      <div className="mt-5 mb-5">
        <ParamTabs />
      </div>
    </div>
  );
}

export default App;
