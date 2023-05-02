import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { App } from "./components/app/App";
import { useIndexStyles } from "./useIndexStyles";

const indexStyles = useIndexStyles();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className={indexStyles.body}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
