import landingImg from "../assets/landing.png";

const Hero = () => {
  return (
    <section className="py-20 px-12 font-['Montserrat']">
      <div className="max-w-8xl mx-auto">

        {/* HERO CARD */}
        <div className="relative overflow-hidden rounded-2xl min-h-[320px] md:min-h-[360px]">

          {/* Background Image */}
          <img
            src={landingImg}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Red gradient overlay */}
          <div
            className="absolute inset-0
                       bg-gradient-to-r
                       from-red-700
                       via-red-700/90
                       to-red-900/30"
          />

          {/* Content */}
          <div className="relative z-10 px-10 py-14 max-w-lg text-white">
            <h1 className="text-4xl md:text-5xl font-light leading-tight">
              Your <span className="font-bold">innovation</span> <br />
              driven partner
            </h1>

            <button onClick={() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  }}className="
              mt-13
              bg-white text-black
              px-8 py-3
              rounded-full
              font-semibold
              shadow-lg shadow-black/40
              transition duration-500 hover:scale-102 cursor-pointer 
            ">
              About us
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
