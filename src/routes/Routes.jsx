import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PageNotFound from "../pages/PageNotFound/PageNOtfound";
import ProductLayout from "../pages/Product/ProductLayout";
import Product from "../pages/Product/Product";
import ViewProduct from "../pages/Product/ViewProduct";
import NewProduct from "../pages/Product/NewProduct";
import UpdateProduct from "../pages/Product/UpdateProduct";

const routes = [
  {
    path: "",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "sign-up", element: <SignUpPage /> },
      {
        path: "product",
        element: <ProductLayout />,
        children: [
          { path: "", element: <Product /> },
          { path: "new", element: <NewProduct /> },
          { path: "update/:id", element: <UpdateProduct /> },
          { path: ":title/:id", element: <ViewProduct /> },
        ],
      },
    ],
  },
];

const appRoutes = createBrowserRouter(routes);

export default appRoutes;
