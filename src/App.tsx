import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import About from "./components/About";
import ServiceAreas from "./components/ServiceAreas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Reviews />
        <About />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
