import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, thunk);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
