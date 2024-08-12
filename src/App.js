import { Provider } from "react-redux";
import Counter from "./components/Counter";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
