function Description() {
  return (
    <section id="description">
      {/* Container */}
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        {/*  Image  */}
        <img src="images/code.jpeg" alt="" className="" />
        {/* Text Container */}
        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20 border-4 border-red-200 ">
          <h2 className="max-w-lg mt-20 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            a full stack web developer
          </h2>
          <p className="max-w-md text-center md:text-left mb-10 mx-4 md:mx-0 md:mb-0">
            Hi I&apos;m a full stack developer who specialises in the MERN
            stack. I&apos;m from Madurai and am super interested in working on
            projects. So please do contact me if you have any interesting
            projects I can help you with
          </p>
        </div>
      </div>
    </section>
  );
}

export default Description;
