import { Link } from "react-router-dom";

function Footer() {
  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <footer className="bg-black">
      {/*  Container */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer flex container*/}
        <div className="flex flex-col item-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* Menu & Logo container */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8 px-3 pb-2">
              <h3 className="text-2xl text-white font-alata font-bold">
                <button onClick={handleClick}>Kishan Abijay</button>
              </h3>
            </div>
            {/*  menu container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* Item 1 */}
              <div className="h-10 group">
                <Link to="about" className="group-hover:text-red-200">
                  About
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-red-200"></div>
              </div>
              {/* Item 2 */}
              <div className="h-10 group">
                <Link to="skills" className="group-hover:text-red-200">
                  Skills
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-red-200"></div>
              </div>
              {/* Item 3*/}
              <div className="h-10 group">
                <Link
                  to="projects"
                  href="#"
                  className="group-hover:text-red-200"
                >
                  Projects
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-red-200"></div>
              </div>
              {/* Item 3*/}
              <div className="h-10 group">
                <Link
                  to="contact"
                  href="#"
                  className="group-hover:text-red-200"
                >
                  Contact
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-red-200"></div>
              </div>
            </div>
          </div>
          {/* Social */}
          <div className="flex flex-col items-center justify-between space-y-4 text-gray-500 pt-1">
            {/* container*/}
            <div className="flex items-center justify-center space-x-4 md:justify-end mx-auto md:mx-0">
              <div className="h-8 group">
                <a
                  href="https://www.facebook.com/kishan.abijay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <img
                    src="images/icon-facebook.svg"
                    alt=""
                    className="h-6 duration-200 ficon"
                  />
                </a>
              </div>
              <div className="h-8 group">
                <a
                  href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <img
                    src="images/icon-twitter.svg"
                    alt=""
                    className="h-6 duration-200 ficon"
                  />
                </a>
              </div>

              <div className="h-8 group">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <img
                    src="images/icon-instagram.svg"
                    alt=""
                    className="h-6 duration-200 ficon"
                  />
                </a>
              </div>
            </div>
            <div className="font-bold">Contact: 9600479089</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
