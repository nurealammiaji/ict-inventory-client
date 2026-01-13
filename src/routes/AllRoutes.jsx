import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from "../pages/Home/Home";
import Settings from "../pages/Settings/Settings";
import ErrorBoundary from "../pages/Error/ErrorBoundary";
import LoanRegister from "../pages/LoanRegister/LoanRegister";
import LaptopRegister from "../pages/LaptopRegister/LaptopRegister";

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
                path: "/settings",
                element: <Settings />
            }
        ]
    }
])

export default AllRoutes
