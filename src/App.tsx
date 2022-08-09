import { Provider } from "react-redux";
import Signup from "./views/signup/signup";
import store from "./store";

import "./styles/colors.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Signup />
    </Provider>
  );
}

export default App;
