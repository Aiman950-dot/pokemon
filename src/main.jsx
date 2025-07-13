import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import Fake from './FakeApi.jsx'
import App from "./App.jsx";
import DataFetch from "./fetchData.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<Fake/>*/}
    <DataFetch />
  </StrictMode>
);
