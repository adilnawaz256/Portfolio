import Header from "./components/Header"
import Contact from './components/Contact'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Footer from "./components/Footer"
import About from "./components/About"
export default function App(){
    return(
        <>
       <Header/>
       <Hero/>
       <About/>
    <Skills width="50%"/>
    <Contact/>
    <Footer/>
    </>
    )
}