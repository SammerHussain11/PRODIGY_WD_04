import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/My Work/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./index.css"; // Ensure global styles are imported

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const myWorkRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollTo = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        handleScrollTo={handleScrollTo}
        refs={{ homeRef, aboutRef, servicesRef, myWorkRef, contactRef }}
      />
      <div ref={homeRef}>
        <Home handleScrollTo={handleScrollTo} contactRef={contactRef} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={myWorkRef}>
        <MyWork />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
