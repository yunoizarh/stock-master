import { createBrowserRouter } from "react-router";
import { Dashboard } from "./routes/Dashboard";
import ProductsPage from "./routes/ProductsPage";
import PointOfSalesPage from "./routes/PointOfSalesPage";

export const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/point-of-sale", element: <PointOfSalesPage /> },
]);
