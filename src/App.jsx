import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import  Projects from "./pages/Projects"
import  Connect from "./pages/Connect"
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
      <div>
      <NavigationBar></NavigationBar>
      <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/Home" element = {<Home />}/>
      <Route path="/About" element = {<About />}/>
      <Route path="/Projects" element = {<Projects />}/>
      <Route path="/Connect" element = {<Connect />}/>
      </Routes>
      </div>
      </HashRouter>

	    <h1 id ="Heading">
	      How h1 Looks like
	    </h1>
	    <p id ="Paragraph">
	      This is a paragraph. You can type stuff you want to see here.
	    </p>
	    <p id = "Next">
	      This is used for another paragraph.
	    </p>
    </>
  )
}

export default App
