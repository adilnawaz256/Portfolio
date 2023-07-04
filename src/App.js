import Header from "./components/Header"
import Contact from './components/Contact'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Footer from "./components/Footer"
import About from "./components/About"
import Project from "./components/Project"
import { Contexthandle } from "./utils/Contexthandle"
import { useState } from "react"
export default function App(){
    const [dark ,setDark] = useState()
    return(
        <>
        
        <Contexthandle.Provider value={{dark,setDark}}>
       <Header/>
       <Hero/>
       <About/>
       <Project/>
       <Skills/>
       <Contact/>
       <Footer/>
       </Contexthandle.Provider>
    </>
    )
}