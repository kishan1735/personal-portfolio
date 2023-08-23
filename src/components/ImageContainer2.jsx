function ImageContainer2() {
  return (
    <div className="item-container2 mt-5 min-h-min capitalize">
      <div className="group relative overflow-hidden md:w-1/3">
        {/* Desktop */}
        <img
          src="../images/Faraway.jpg"
          alt=""
          className="hidden w-full duration-200 md:200 group-hover:scale-110 md:block h-[175.25px]"
        />
        {/* Mobile */}
        <img src="../images/Faraway.jpg" alt="" className="w-full md:hidden" />
        {/* Item Gradient */}
        <div className="item-gradient"></div>
        {/* Item text */}
        <h5 className="z-10 text-black text-center mt-5">
          <span className="font-semibold">Faraway</span> - A React based travel
          helper
        </h5>
      </div>
      <div className="group relative overflow-hidden md:w-1/3">
        {/* Desktop */}
        <img
          src="../images/React Redux Bank.jpg"
          alt=""
          className="hidden w-full duration-200 md:200 group-hover:scale-110 md:block h-[175.25px]"
        />
        {/* Mobile */}
        <img
          src="../images/React Redux Bank.jpg"
          alt=""
          className="w-full md:hidden"
        />
        {/* Item Gradient */}
        <div className="item-gradient"></div>
        {/* Item text */}
        <h5 className="z-10 text-black text-center mt-5">
          <span className="font-semibold">React Redux Bank</span>- A React and
          Redux based project
        </h5>
      </div>
      <div className="group relative overflow-hidden md:w-1/3">
        {/* Desktop */}
        <img
          src="../images/React-quiz.jpg"
          alt=""
          className="hidden w-full duration-200 md:200 group-hover:scale-110 md:block h-[175.25px]"
        />
        {/* Mobile */}
        <img
          src="../images/React-quiz.jpg"
          alt=""
          className="w-full md:hidden"
        />
        {/* Item Gradient */}
        <div className="item-gradient"></div>
        {/* Item text */}
        <h5 className="z-10 text-black text-center mt-5">
          <span className="font-semibold">React Quiz</span> - A React based quiz
        </h5>
      </div>
    </div>
  );
}

export default ImageContainer2;
