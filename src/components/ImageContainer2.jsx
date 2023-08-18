function ImageContainer2() {
  return (
    <div className="item-container mt-5 min-h-min">
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
        <h5>From up Above VR</h5>
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
        <h5>Pocket Borealis</h5>
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
        <h5>the curiosity</h5>
      </div>
    </div>
  );
}

export default ImageContainer2;
