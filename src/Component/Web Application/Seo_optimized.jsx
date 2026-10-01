import seo_optimized from "../../assets/Web Application/Seo Optimized/seo_optimized.svg";
const Seo_optimized = () => {
  return (
    <section className="py-20">
      <div className="customContainer !my-0">
        <div className="mb-10">
          <h2 className="H2 font-bold capitalize text-black leading-tight text-center">
            Efficient and SEO-Optimized
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              Web Development Process at GDFX
            </span>
          </h2>
          <p className="P text-text_color text-center max-w-5xl mx-auto">
            At GDFX, we follow an agile, SEO-friendly web development process to
            create scalable, responsive websites tailored to your needs.
            Combining cutting-edge technologies, user-centric design, and proven
            strategies, we deliver websites that enhance search engine rankings,
            improve user experience, and drive business growth. Trust GDFX for
            impactful digital transformation.
          </p>
        </div>
        <div onContextMenu={(e) => e.preventDefault()}>
          <img src={seo_optimized} draggable={false} alt="Service-Seo-Image" />
        </div>
      </div>
    </section>
  );
};

export default Seo_optimized;
