import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import ErrorBoundary from "../pages/Error/ErrorBoundary";
import Home from "../pages/Home/Home";
import LoanRegister from "../pages/LoanRegister/LoanRegister";
import LaptopRegister from "../pages/LaptopRegister/LaptopRegister";
import SettingsPanel from "../pages/Settings/SettingsPanel";
import SearchItems from "../pages/SearchItems/SearchItems";
import Stickers from "../pages/Stickers/Stickers";
import Settings from "../pages/Settings/Settings";
import Categories from "../pages/Settings/Categories/Categories";
import Brands from "../pages/Settings/Brands/Brands";
import Items from "../pages/Settings/Items/Items";

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
                path: "/loan-register",
                element: <LoanRegister />
            },
            {
                path: "/laptop-register",
                element: <LaptopRegister />
            },
            {
                path: "/search-items",
                element: <SearchItems />
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
                        path: "/settings/items",
                        element: <Items />
                    }
                ]
            }
        ]
    }
])

export default AllRoutes
