import { useState } from "react";
import ImageContainer1 from "./ImageContainer1";
import ImageContainer2 from "./ImageContainer2";

function ProjectImg() {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow((is) => !is);
  }
  return (
    <section id="creations">
      {/*  Creations container */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/*  Creations header  */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            My Works
          </h2>

          <button className="hidden btn md:block" onClick={handleClick}>
            {show ? "See Less" : "See All"}
          </button>
        </div>
        <div className="mt-10">
          <ImageContainer1 />
          {show ? <ImageContainer2 /> : ""}
        </div>

        {/* Bottom Button Container*/}
        <div className="flex justify-center md:hidden mt-10">
          <button className="btn w-full md:hidden" onClick={handleClick}>
            {show ? "See Less" : "See All"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectImg;
