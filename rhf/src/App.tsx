import { RouterProvider } from "react-router-dom"
import { router } from "./app/AppRoutes"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"

function App() {
  return (
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  )
}

export default App
