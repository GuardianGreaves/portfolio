import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";

import ScrollToTop from "./utils/scrollToTop"
import PetProjects from "./pages/PetProjects";
import PetProject from "./pages/PetProject";

function App() {
  return (
    <div className="App">
        <Router basename="/portfolio">
          <ScrollToTop/>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/petProjects" element={<PetProjects />}/>
              <Route path="/petProject/:id" element={<PetProject />}/>
              <Route path="/project/:id" element={<Project />}/>
              <Route path="/contacts" element={<Contacts />}/>
            </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;