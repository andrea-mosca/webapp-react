import { createRoot } from "react-dom/client";

// *IMPORT CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";

import * as bootstrap from "bootstrap";
import App from "./App";
import { LoaderProvider } from "./context/LoaderContext";

createRoot(document.getElementById("root")).render(
  <LoaderProvider>
    <App />
  </LoaderProvider>
);
