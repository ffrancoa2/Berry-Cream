import { useEffect, useState } from "react"
import AppRoutes from "./routes"
import Loader from "./components/Loader"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800) // duración del loading

    return () => clearTimeout(timer)
  }, [])

  return loading ? <Loader /> : <AppRoutes />
}

export default App
