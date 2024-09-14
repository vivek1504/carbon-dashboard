import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Carbon } from "./screens/Carbon";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Carbon />);
