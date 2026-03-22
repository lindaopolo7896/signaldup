import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollBottom, setScrollBottom] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  function handleClose() {
    setToggle(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setScrolled(scrollPosition > 400);
      setScrollBottom(scrollPosition > 3000);
      setScrollNav(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={toggle ? "max-w-6xl " : " "}>
      <div
        className={`w-full bg-[#f3f1ee] ${
          scrolled ? "scrolled" : ""
        } ${scrollBottom ? "scrollBtm" : ""} ${scrollNav ? "scrollNav" : ""} ${toggle ? "" : ""}`}
      >
        <NavBar onClick={handleToggle} toggle={toggle} />
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <Footer />
      </div>
      <div className={` ease-in-out ${toggle ? "flex " : "hidden"}`}>
        <div className="fixed z-10 top-0 w-full bg-black lg:bg-black/90 h-[20px] md:h-[80px] max-w-6xl slide-in"></div>
        <Sidebar onClick={handleClose} />
        <div className="fixed bottom-0 w-full bg-black lg:bg-black/90 max-w-6xl h-[20px] md:h-[80px] z-10 slide-in"></div>
      </div>
    </div>
  );
}

export default LandingPage;
