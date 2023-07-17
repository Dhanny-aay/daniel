import About from "./comps/about";
import Contact from "./comps/contact";
import Footer from "./comps/footer";
import Hero from "./comps/hero";
import Navbar from "./comps/navbar";
import Projects from "./comps/projects";


export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Projects/>
   <About/>
   <Contact/>
   <Footer/>
   </>
   )
}
