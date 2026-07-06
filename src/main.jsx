import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NeckProtocol from "./NeckProtocol.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NeckProtocol />
  </StrictMode>
);
