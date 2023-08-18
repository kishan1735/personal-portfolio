import ImageContainer1 from "./ImageContainer1";
import ImageContainer2 from "./ImageContainer2";
function ImageContainer() {
  return (
    <div className="mt-10">
      <ImageContainer1 />
      <ImageContainer2 />
      {/* Bottom Button Container */}
      {/* <div className="flex justify-center md:hidden mt-10">
        <button className="btn w-full md:hidden">See All</button>
      </div> */}
    </div>
  );
}

export default ImageContainer;
