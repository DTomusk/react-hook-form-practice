import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TextSubmit from "../pages/TextSubmit";
import TextValidation from "../pages/TextValidation";

export const router = createBrowserRouter([
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "/text-submit",
        element: <TextSubmit />,
    },
    {
        path: "/text-validation",
        element: <TextValidation />,
    }
]);