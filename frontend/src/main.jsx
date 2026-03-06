import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import UmamiTracker from "./components/UmamiTracker"; // import the tracker
import "./index.css";
import { HashRouter } from "react-router-dom"; // make sure it's react-router-dom

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <UmamiTracker /> {/* mounted once to track all routes */}
      <App />
    </HashRouter>
  </StrictMode>
);


//This file is for rendering the main React application into the DOM.

//React router is used to handle client-side routing in the application. How to check? 
// Because the App component here is wrapped in BrowserRouter, enabling routing capabilities throughout the app.
// The UmamiTracker component is rendered at the root level to track all routes in the application.
//Replacing BrowerRouter with HashRouter to avoid 404 errors on GitHub Pages and also to
//ensure that the app works correctly when deployed to GitHub Pages.
