import seo from "../../assets/Digital Transformation Service/seo.svg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Seo_header = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="sm:min-h-[500px] min-h-[400px]">
        <div className="customContainer !mb-0 h-full pt-32 pb-10 flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center lg:pt-[150px]">
          <div className="lg:basis-1/2 basis-full">
            <h2 className="H2 font-bold capitalize text-white leading-tight">
              "Unlock Higher Rankings
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                with Proven SEO Solutions"
              </span>
            </h2>
            <p className="text-white/90 mt-3 mb-4 P leading-relaxed">
              Achieve superior search rankings and outshine your competitors
              through advanced SEO strategies and optimization techniques
              customized for your industry and target audience.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <button className="px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Contact Us Today
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>
          <div className="lg:basis-1/2 basis-full flex justify-center items-center">
            <img src={seo} draggable={false} className="h-full" alt="seo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seo_header;
