import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from "../pages/Home/Home";
import Settings from "../pages/Settings/Settings";
import ErrorBoundary from "../pages/Error/ErrorBoundary";

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
                path: "/settings",
                element: <Settings />
            }
        ]
    }
])

export default AllRoutes
