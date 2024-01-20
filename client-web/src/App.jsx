import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/login/LoginPage";
import Home from './pages/home/Home'
import Footer from "./components/footer/Footer";
import "./styles/global.scss";
import Products from "./pages/products/Products";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
        <div className="main">
          <Navbar />
          <div className="container">
            <div className="menuContainer">
              <Menu />
            </div>
            <div className="contentContainer">
              <QueryClientProvider client={queryClient}>
                <Outlet />
              </QueryClientProvider>
            </div>
          </div>
          <Footer />
        </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        // {
        //   path: "/products/:id",
        //   element: <Products />,
        // },
        // {
        //   path: "/users",
        //   element: <Products />,
        // },
        // {
        //   path: "/usssers/:id",
        //   element: <Products />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
