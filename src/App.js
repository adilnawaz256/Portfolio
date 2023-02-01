import Header from "./components/Header"
import Contact from './components/Contact'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Footer from "./components/Footer"
import About from "./components/About"
import Project from "./components/Project"
export default function App(){
    return(
        <>
       <Header/>
       <Hero/>
       <About/>
       <Project/>
       <Skills />
       <Contact/>
       <Footer/>
    </>
    )
}