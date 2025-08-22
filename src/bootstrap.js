import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Page from "./Page";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>
);
