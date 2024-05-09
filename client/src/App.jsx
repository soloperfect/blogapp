import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Sign from "./components/Sign"
import Signin from "./components/Signin"
import Dashboard from "./components/Dashboard"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/signup" element={<Sign />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}
