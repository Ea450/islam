import ContactMe from "./Componenets/ContactMe";
import Footer from "./Componenets/Footer";
import Highlights from "./Componenets/Highlights";
import Home from "./Componenets/Home";
import Navbar from "./Componenets/Navbar";
import Projects from "./Componenets/Projects";
import Skills from "./Componenets/Skills";

function App() {
  return (
    <>
      <div className="container relative">
        <Navbar />
        <Home />
        <Highlights />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
