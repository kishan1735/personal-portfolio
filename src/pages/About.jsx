import NavBar from "../components/NavBar";

function About() {
  return (
    <div className="container max-w-screen-xl my-0 pt-0 p-2 md:p-10 min-h-screen  md:pt-0 h-[590px] md:h-screen text-black  bg-slate-900">
      <NavBar />
      <div className="relative p-10 rounded-xl my-5 bg-white opacity-80 shadow-lg min-w-screen">
        <div className="flex z-10 space-x-4">
          <div className="text-3xl">
            <h2 className="max-w-lg mt-10 md:mt-15 mb-6 font-sans text-6xl font-bold text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              About
            </h2>
          </div>
        </div>

        {/*  Large Text */}
        <p className="relative z-10 mt-1 text-xl tracking-wider font-semibold font-sans uppercase">
          Full Stack developer
        </p>

        {/* Small Text */}
        <p className="mt-6 opacity-80 line-clamp-6 text-lg">
          Hi I&apos;m a full stack developer who specialises in the MERN stack.
          I&apos;m a student in BITS Hyderabad. I&apos;m from Madurai and am
          super interested in working on projects. So please do contact me if
          you have any interesting projects I can help you with
        </p>
      </div>
    </div>
  );
}

export default About;
