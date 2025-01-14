function Home() {
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
  
  export default Home
  