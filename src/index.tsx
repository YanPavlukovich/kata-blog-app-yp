import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { App } from "./components/app/App";
import s from "./index.module.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className={s.body}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
