import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TextSubmit from "../pages/TextSubmit";
import TextValidation from "../pages/TextValidation";
import InputComponents from "../pages/InputComponents";
import GenericInputComponents from "../pages/GenericInputComponents";
import RadixComponentForm from "../pages/RadixComponentForm";

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
    },
    {
        path: "/input-components",
        element: <InputComponents />,
    },
    {
        path: "/generic-input-components",
        element: <GenericInputComponents />,
    },
    {
        path: "/radix-component-form",
        element: <RadixComponentForm />,
    }
]);