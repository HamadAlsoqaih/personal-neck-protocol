import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NeckProtocol from "./NeckProtocol.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NeckProtocol />
  </StrictMode>
);
