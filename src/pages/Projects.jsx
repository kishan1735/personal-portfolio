import ImageContainer from "../components/ImageContainer";
import NavBar from "../components/NavBar";

function Projects() {
  return (
    <div className="container w-screen min-w-7xl my-0 pt-0 p-2 md:p-10 md:pt-0 min-h-screen md:h-full h-full text-black  bg-slate-900">
      <NavBar />
      <div className="relative p-5 py-10 md:px-10 rounded-xl my-5 bg-white opacity-80 shadow-lg">
        <div className="flex z-10 space-x-4">
          <div className="text-3xl">
            <h2 className="max-w-lg mt-10 md:mt-15 mb-6 font-sans text-6xl font-bold text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left ">
              Projects
            </h2>
          </div>
        </div>

        <p className="relative z-10 mt-1 text-xl tracking-wider font-sans uppercase font-semibold">
          Here are few of my projects
        </p>

        {/* Image container */}
        <ImageContainer />
      </div>
    </div>
  );
}

export default Projects;
