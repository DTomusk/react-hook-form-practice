import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TextSubmit from "../pages/TextSubmit";

export const router = createBrowserRouter([
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "/text-submit",
        element: <TextSubmit />,
    }
]);