import ImageContainer3 from "./ImageContainer3";
import ImageContainer4 from "./ImageContainer4";
function ImageContainer() {
  return (
    <div className="mt-10">
      <ImageContainer3 />
      <ImageContainer4 />
      {/* Bottom Button Container */}
      {/* <div className="flex justify-center md:hidden mt-10">
        <button className="btn w-full md:hidden">See All</button>
      </div> */}
    </div>
  );
}

export default ImageContainer;
