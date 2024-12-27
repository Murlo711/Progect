import React from "react";
import { createRoot } from "react-dom/client";
import EquipmentAndContactSectionWidget from "./components/EquipmentAndContactSectionWidget";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

function renderApp() {
  root.render(
    <div
      style={{ display: "inline-block", width: "1440px", background: "white" }}
      data-ignore="used only for top most container width"
    >
      <EquipmentAndContactSectionWidget />
    </div>
  );
}

renderApp();