import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
const SuccessStories = () => {
  const { caseStudys } = useSelector((state) => state.caseStudyContainer);
  const fourCaseStudies = caseStudys?.slice(0, 3);
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="bg-bgFirstBlue py-20">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-black leading-tight text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Success stories
            </span>
          </h2>
          <p className="P text-off_white text-center">
            At GDFX, we take pride in delivering innovative mobile app solutions
            that drive real results. Here’s how we’ve transformed ideas into
            success
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {fourCaseStudies?.map((item, index) => (
            <motion.div
              key={item._id}
              className="relative overflow-hidden group rounded h-[200px] lg:h-[260px]"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-primary-gradient rounded-md overflow-hidden">
                <img
                  src={item?.projectTitleImage?.url}
                  draggable={false}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  alt={item.projectTitle}
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h2 className="H4 font-extrabold text-white capitalize mb-4">
                  {item.projectTitle}
                </h2>
                {/*  <p className="text-off_white mb-4 line-clamp-2 H5 font-semibold">
                  {item.shortDescription || item.projectTitle}
                </p> */}
                <Link
                  // to={`/case-study/${item.projectTitle}`}
                  to={`/case-study/${item.projectTitle
                      .replace(/[^a-zA-Z0-9]+/g, "-")
                      .replace(/^-+|-+$/g, "")
                      .toLowerCase()}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  className="self-start"
                  aria-label={`View ${item.projectTitle} case study`}
                >
                  <button className="px-5 py-2 rounded-lg font-medium text-white bg-danger-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300 flex items-center gap-1 group/item">
                    Read More
                    <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover/item:translate-x-1" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
