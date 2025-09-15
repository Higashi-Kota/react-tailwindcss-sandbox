import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayout } from "./layouts"
import { AboutPage } from "./routes/AboutPage"
import { ContactPage } from "./routes/ContactPage"
import { DashboardPage } from "./routes/DashboardPage"
import { HomePage } from "./routes/HomePage"

import "@internal/theme/styles"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
