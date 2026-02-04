import { RouterProvider } from "react-router-dom"
import { ReactQueryProvider } from "./providers/ReactQueryProvider"
import { router } from "./router"
import './styles/globals.css'


const App = () => {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  )
}

export default App
