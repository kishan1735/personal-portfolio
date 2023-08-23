import NavBar from "../components/NavBar";

function Contact() {
  return (
    <div className="container min-w-7xl my-0 pt-0 p-2 md:p-10 md:pt-0 h-[590px] min-h-screen md:h-screen  text-black  bg-slate-900">
      <NavBar />
      <div className="relative p-10 rounded-xl my-5 bg-white opacity-80 shadow-lg">
        <div className="flex z-10 space-x-4">
          <div className="text-3xl">
            <h2 className="max-w-lg mt-10 md:mt-15 mb-6 font-sans text-6xl font-bold text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              Contact
            </h2>
          </div>
        </div>

        {/*  Large Text */}
        <p className="relative z-10 mt-1 text-xl tracking-widest font-sans uppercase font-semibold">
          Contact me anytime
        </p>

        {/* Small Text */}
        <p className="mt-6 text-lg opacity-80 line-clamp-6 font-semibold">
          Mobile: 9600479089
        </p>
        <p className="mt-6 text-lg opacity-80 line-clamp-6 font-semibold">
          Email: f20220037@hyderabad.bits-pilani.ac.in
        </p>
      </div>
    </div>
  );
}

export default Contact;
