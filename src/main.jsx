import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./components/Contex.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
