

import Contacts from "./sections/Contacts/Contacts";
import AboutMe from "./sections/About/AboutMe";
import Headers from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Projects from "./sections/Projects/Project";
import Portfolio from "./sections/portfolio/Portfolio";




const App = () => {
  return (
      <main>

        <Navbar/>
        <Headers/>
        <AboutMe/>
        <Projects/>
        <Portfolio/>
        <Contacts/>
    
        </main>
    
  )
}

export default App;















