// Components
import Navbar from "./Component/Navbar"
import Connection from "./Component/Connection"
// React-Router;
import { Routes , Route } from "react-router"
// Pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import Guest from "./Pages/Guest"
import Links from "./Pages/Links"
import Contact from "./Pages/Contact"
import SeprateProjects from "./Pages/SeprateProjects"
import NotFound from "./Pages/NotFound"
import { useState } from "react"
import './App.css'

function App() {

  const [checkConnection, setCheckConnection] = useState(false);
  // this checkConnection state is now false and also its modifir=er function which is going to all components...
  // now whenever any component change its state it will affect to all components...

  return (
    <>
      <Navbar updateConnection={checkConnection} setCheckConnection={setCheckConnection}/>
      <Connection checkConnection={checkConnection} setCheckConnection={setCheckConnection} />
      <Routes>
        <Route path="/" element={<Home updateConnection={checkConnection} setCheckConnection={setCheckConnection}/>} />
        <Route path="/about" element={<About updateConnection={checkConnection} setCheckConnection={setCheckConnection}/>} />
        <Route path="/guestbook" element={<Guest  updateConnection={checkConnection} setCheckConnection={setCheckConnection}/>} />
        <Route path="/links" element={<Links  updateConnection={checkConnection} setCheckConnection={setCheckConnection}/>} />
        <Route path="/contact" element={<Contact updateConnection={checkConnection} setCheckConnection={setCheckConnection}/>} />
        <Route path="/projects" element={<SeprateProjects updateConnection={checkConnection} setCheckConnection={setCheckConnection}/>} />
        <Route path="/error" element={<NotFound updateConnection={checkConnection} setCheckConnection={setCheckConnection}/>} />
      </Routes>
    </>
  )
}

export default App
