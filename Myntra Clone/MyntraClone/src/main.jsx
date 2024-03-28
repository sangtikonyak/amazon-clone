import React from "react";
import ReactDOM from "react-dom/client";
import App from "./route/App.jsx";
import "./index.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./route/Home.jsx";
import BagSummary from "./Components/BagSummary.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import ItemStore from "./store/Index.js";
import BagContainer from "./Components/BagContainer.jsx";
import Header from "./Components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag-container",
        element: <BagContainer />,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ItemStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
