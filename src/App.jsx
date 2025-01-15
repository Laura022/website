import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './navbar.jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import  Projects from "./pages/Projects.jsx"
import  Connect from "./pages/Connect.jsx"
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
      <div>
      <NavigationBar></NavigationBar>
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path="/Home" element = {<Home />}/>
      <Route path="/About" element = {<About />}/>
      <Route path="/Projects" element = {<Projects />}/>
      <Route path="/Connect" element = {<Connect />}/>
      </Routes>
      </div>
      </HashRouter>

	    
    </>
  )
}

export default App
