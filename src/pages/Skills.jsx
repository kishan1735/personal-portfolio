import NavBar from "../components/NavBar";

function Skills() {
  return (
    <div className="container max-w-screen-kxl my-0 pt-0 p-2 md:p-10 md:pt-0 h-full min-h-screen-kxl kxl:h-screen--kxl  text-black  bg-slate-900 text-center md:text-start">
      <NavBar />
      <div className="relative p-10 rounded-xl my-10 mt-20 bg-white opacity-90 shadow-lg min-w-screen">
        <div className="flex z-10 space-x-4 justify-center md:justify-start">
          <div className="text-3xl">
            <h2 className="max-w-lg mt-10 md:mt-15 mb-6 font-sans text-6xl font-bold text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              SKILLS
            </h2>
          </div>
        </div>

        {/*  Large Text */}
        <p className="relative z-10 mt-1 text-xl tracking-wider font-semibold font-sans uppercase">
          Full Stack developer
        </p>

        {/* Small Text */}
        <div className="flex flex-col mt-10 md:flex-row md:justify-around ">
          <div className="flex flex-col space-y-6 items-center">
            <div className="uppercase text-3xl font-bold">
              <img
                src="../images/tailwindcss.png"
                alt=""
                className="bg-transparent h-[86.83px] w-[141.97px] ml-8"
              />
              {/* <p className="mt-6">Tailwind CSS</p> */}
            </div>
            <div className="uppercase text-3xl font-bold text-center">
              <img
                src="../images/nodejs.png"
                alt=""
                className="bg-transparent h-[86.83px] w-[141.97px] ml-9 "
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 items-center mt-4 md:mt-0">
            <div className="uppercase text-3xl font-bold text-center mr-24">
              <img
                src="../images/js.png"
                alt=""
                className="ml-28 opacity:100 h-[86.83px] w-[86.83px]"
              />
              {/* <p className="mt-6">Javascript</p> */}
            </div>
            <div className="uppercase text-3xl font-bold text-center">
              <img
                src="../images/expressjs.png"
                alt=""
                className="bg-transparent h-[86.83px] w-[284.97px] ml-8 "
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 items-center mt-2 md:mt-0">
            <div className="uppercase text-3xl font-bold text-center mr-24 ">
              <img
                src="../images/react.png"
                alt=""
                className="bg-transparent h-[86.83px] w-[100px] ml-28"
              />
              {/* <p className="mt-6">React</p> */}
            </div>
            <div className="uppercase text-3xl font-bold text-center">
              <img
                src="../images/mongodb.png"
                alt=""
                className="bg-transparent h-[86.83px] w-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
