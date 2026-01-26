import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import ErrorBoundary from "../pages/Error/ErrorBoundary";
import Home from "../pages/Home/Home";
import Items from "../pages/Items/Items";
import SearchItems from "../pages/SearchItems/SearchItems";
import LoanRegister from "../pages/LoanRegister/LoanRegister";
import LaptopRegister from "../pages/LaptopRegister/LaptopRegister";
import Stickers from "../pages/Stickers/Stickers";
import SettingsPanel from "../pages/Settings/SettingsPanel";
import Settings from "../pages/Settings/Settings";
import Categories from "../pages/Settings/Categories/Categories";
import Brands from "../pages/Settings/Brands/Brands";
import Suppliers from '../pages/Settings/Suppliers/Suppliers';
import Consumers from "../pages/Settings/Consumers/Consumers";
import Users from "../pages/Settings/Users/Users";
import Locations from "../pages/Settings/Locations/Locations";

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/items",
                element: <Items />
            },
            {
                path: "/search-items",
                element: <SearchItems />
            },
            {
                path: "/loan-register",
                element: <LoanRegister />
            },
            {
                path: "/laptop-register",
                element: <LaptopRegister />
            },
            {
                path: "/stickers",
                element: <Stickers />
            },
            {
                path: "/settings",
                element: <SettingsPanel />,
                children: [
                    {
                        path: "/settings",
                        element: <Settings />
                    },
                    {
                        path: "/settings/categories",
                        element: <Categories />
                    },
                    {
                        path: "/settings/brands",
                        element: <Brands />
                    },
                    {
                        path: "/settings/suppliers",
                        element: <Suppliers />
                    },
                    {
                        path: "/settings/locations",
                        element: <Locations />
                    },
                    {
                        path: "/settings/consumers",
                        element: <Consumers />
                    },
                    {
                        path: "/settings/users",
                        element: <Users />
                    }
                ]
            }
        ]
    }
])

export default AllRoutes
