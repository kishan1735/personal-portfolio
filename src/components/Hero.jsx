import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Hero() {
  const [hamburger, setHamburger] = useState(false);
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  useEffect(
    function () {
      document.getElementById("mobile-menu").classList.toggle("hidden");
      document.getElementById("mobile-menu").classList.toggle("flex");
      // document.getElementById("hamburger-btn").classList.toggle("open");
    },
    [hamburger]
  );
  return (
    <div>
      <section id="hero">
        {/* Hero container */}
        <div className="container max-w-6xl px-6 py-1 md:px-4">
          {/* Navbar */}
          <nav className="flex justify-between items-center pl-10 py-10">
            {/* Name  */}
            <div className="font-bold px-2 md:px-3 py-2 opacity-40 bg-white">
              <h3 className="text-3xl text-black z-10 opacity:100 font-sans uppercase font-bold tracking-widest drop-shadow-2xl">
                Kishan Abijay
              </h3>
            </div>
            {/* Navigation items */}
            <div className="hidden md:flex max-w-lg text-white font-sans uppercase space-x-6 text-xl font-semibold">
              <div className="group">
                <Link to="about">
                  <span className="">About</span>
                </Link>
                <div className="mx-2 group-hover:border-b-2 group-hover:border-white"></div>
              </div>
              <div className="group">
                <Link to="skills">
                  <span className="drop-shadow-5xl">Skills</span>
                </Link>
                <div className="mx-2 group-hover:border-b-2 group-hover:border-white"></div>
              </div>
              <div className="group">
                <Link to="projects">
                  <span className="drop-shadow-5xl">Projects</span>
                </Link>
                <div className="mx-2 group-hover:border-b-2 group-hover:border-white"></div>
              </div>
              <div className="group">
                <Link to="contact">
                  <span className="drop-shadow-5xl">Contact</span>
                </Link>
                <div className="mx-2 group-hover:border-b-2 group-hover:border-white"></div>
              </div>
            </div>
            {/* To Do HAMBURGER */}
            <div className={`${size[0] <= 768 && "md:hidden"} block `}>
              <button
                onClick={() => setHamburger((is) => !is)}
                id="hamburger-btn"
                type="button"
                className={`z-40 block hamburger ${
                  hamburger ? "open" : "md:hidden "
                } focus:outline-none`}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/* Mobile menu */}
          <MobileMenu color="bg-black" />
          {/* Container 2 */}
          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            YOU KNOW ME AS <span className="text-red-300">RED GRENINJA</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
