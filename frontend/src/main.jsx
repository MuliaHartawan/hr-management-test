// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/utils/styles/index.css";
import { Provider } from "./components/ui/provider.jsx";
import RouterParent from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <RouterParent />
  </Provider>
  // </StrictMode>
);
