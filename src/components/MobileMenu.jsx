import { Link } from "react-router-dom";

function MobileMenu({ color }) {
  return (
    <div
      className={`flex absolute top-0 bottom-0 left-0 self-end flex-col w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase ${color} z-30 `}
      id="mobile-menu"
    >
      <Link to="/about" className="hover:text-pink-500">
        About
      </Link>
      <Link to="/skills" className="hover:text-pink-500">
        Skills
      </Link>
      <Link to="/projects" className="hover:text-pink-500">
        Projects
      </Link>
      <Link to="/contact" className="hover:text-pink-500">
        Contact
      </Link>
    </div>
  );
}

export default MobileMenu;
