import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function NavBar() {
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
    <div className="container max-w-6xl px-4 py-1 md:px-2">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-10 bg-slate-900  ">
        {/* Name  */}
        <div className=" px-1 py-1 md:px-3 md:py-2 bg-white opacity-50">
          <h3 className="text-3xl text-black font-sans uppercase font-bold tracking-widest">
            <Link to="/">Kishan Abijay</Link>
          </h3>
        </div>
        {/* Navigation items */}
        <div className="hidden md:flex max-w-lg text-white font-sans space-x-6 text-xl uppercase font-semibold">
          <div className="group">
            <Link to="/about">
              <span className="shadow-lg ">About</span>
            </Link>
            <div className="mx-2 group-hover:border-b-2 group-hover:border-white"></div>
          </div>
          <div className="group">
            <Link to="/skills">
              <span className="drop-shadow-5xl shadow-lg">Skills</span>
            </Link>
            <div className="mx-2 group-hover:border-b-2 group-hover:border-white"></div>
          </div>
          <div className="group">
            <Link to="/projects">
              <span className="drop-shadow-5xl">Projects</span>
            </Link>
            <div className="mx-2 group-hover:border-b-2 group-hover:border-white"></div>
          </div>
          <div className="group">
            <Link to="/contact">
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
      <MobileMenu color="bg-slate-900" />
    </div>
  );
}

export default NavBar;
