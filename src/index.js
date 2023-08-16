import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateProvider } from "./components/StateProvider.jsx";
import { initialState, reducer } from "./components/Reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />
    </StateProvider>
  
);
