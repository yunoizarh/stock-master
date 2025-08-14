import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router.jsx";
import "primereact/resources/themes/lara-light-blue/theme.css"; // or any other theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ProductsContextProvider } from "./context/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  </StrictMode>
);
