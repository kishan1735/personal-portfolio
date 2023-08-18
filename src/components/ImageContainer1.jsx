function ImageContainer1() {
  return (
    <div className="item-container">
      <div className="group relative overflow-hidden md:w-1/3 rounded-sm">
        {/* Desktop */}
        <img
          src="../images/node-farm.jpg"
          alt=""
          className="hidden w-full duration-200 md:200 group-hover:scale-110 md:block"
        />
        {/* Mobile */}
        <img
          src="../images/node-farm.jpg"
          alt=""
          className="w-full md:hidden group-hover:scale-110"
        />
        {/* Item Gradient */}
        <div className="item-gradient"></div>
        {/* Item text */}
        <h5>Deep Earth</h5>
      </div>
      <div className="group relative overflow-hidden md:w-1/3">
        {/* Desktop */}
        <img
          src="../images/WorldWise.jpg"
          alt=""
          className="hidden w-full duration-200 md:200 group-hover:scale-110 md:block h-[167.25px]"
        />
        {/* Mobile */}
        <img
          src="../images/WorldWise.jpg"
          alt=""
          className="w-full md:hidden"
        />
        {/* Item Gradient */}
        <div className="item-gradient"></div>
        {/* Item text */}
        <h5>Deep Earth</h5>
      </div>
      <div className="group relative overflow-hidden md:w-1/3">
        {/* Desktop */}
        <img
          src="../images/MovieHub.jpg"
          alt=""
          className="hidden w-full duration-200 md:200 group-hover:scale-110 md:block h-[167.25px]"
        />
        {/* Mobile */}
        <img src="../images/MovieHub.jpg" alt="" className="w-full md:hidden" />
        {/* Item Gradient */}
        <div className="item-gradient"></div>
        {/* Item text */}
        <h5>Night Arcade</h5>
      </div>
    </div>
  );
}

export default ImageContainer1;
