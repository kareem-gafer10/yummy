import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import ContactUs from "./pages/ContactUs";
import Area from "./pages/Area";
import Ingredients from "./pages/Ingredients";
import MealsDetails from "./pages/mealsDetails";
import { Toaster } from "react-hot-toast";
import AreaDetails from "./pages/AreaDetails";
import IngredientsDetails from "./pages/IngredientsDetails";
import CategoryDetails from "./pages/CategoryDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "/:id", element: <MealsDetails /> },
        { path: "/search", element: <Search /> },
        { path: "/categories", element: <Categories /> },
        { path: "/categories/:id", element: <CategoryDetails /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/area", element: <Area /> },
        { path: "/area/:id", element: <AreaDetails /> },
        { path: "/ingredients", element: <Ingredients /> },
        { path: "/ingredients/:id", element: <IngredientsDetails /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
