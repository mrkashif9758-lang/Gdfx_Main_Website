import about_it_consulting_hero from "../../assets/About It Consulting/about_it_consulting_hero.svg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-bgSecondBlue">
      <div className="sm:min-h-[500px] min-h-[400px]">
        <div className="customContainer !mb-0 h-full pt-32 pb-10 flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center lg:pt-[150px]">
          <div className="lg:basis-1/2 basis-full">
            <h2 className="H2 font-bold capitalize text-white leading-tight">
              About
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                IT Consulting
              </span>
            </h2>
            <p className="text-white/90 mt-3 mb-4 P leading-relaxed">
              Transform your business with GDFX's IT Consulting services. We
              provide tailored strategies, innovative solutions, and expert
              guidance to optimize operations, enhance security, and drive
              growth. Empower your success with future-ready technology and
              measurable results.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <button className="px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Contact Us Today
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>
          <div className="lg:basis-1/2 basis-full self-center flex justify-center">
            <img
              src={about_it_consulting_hero}
              draggable={false}
              className="h-full"
              alt="About-Hero-Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
