import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App.jsx";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
 ${reset}
`;

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
