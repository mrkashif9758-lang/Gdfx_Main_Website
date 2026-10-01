import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import designing_1 from "../../assets/newImg/designing_1.svg";
import designing_2 from "../../assets/newImg/designing_2.svg";
import designing_3 from "../../assets/newImg/designing_3.svg";
import designing_4 from "../../assets/newImg/designing_4.svg";
import designing_5 from "../../assets/newImg/designing_5.svg";
import designing_6 from "../../assets/newImg/designing_6.svg";
import designing_7 from "../../assets/newImg/designing_7.svg";
import designing_8 from "../../assets/newImg/designing_8.svg";
import designing_9 from "../../assets/newImg/designing_9.svg";
import designing_10 from "../../assets/newImg/designing_10.svg";
import designing_11 from "../../assets/newImg/designing_11.svg";
import designing_12 from "../../assets/newImg/designing_12.svg";

import DesignGrid from "./DesignGrid";
import "./Website_designing.css";

const designs = [
  {
    title: "Website Designing",
    img: designing_1,
    text: "Creating stunning, responsive, and SEO-optimized websites that provide an exceptional user experience across all devices.",
  },
  {
    title: "User Interface (UI) Design",
    img: designing_2,
    text: "Designing intuitive user interfaces that enhance usability and ensure seamless interaction across digital experiences.",
  },
  {
    title: "User Experience (UX) Design",
    img: designing_3,
    text: "Improving user satisfaction through accessible, intuitive, and thoughtfully crafted digital experiences.",
  },
  {
    title: "Mobile App Development",
    img: designing_4,
    text: "Crafting sleek, interactive, and user-friendly experiences for both iOS and Android mobile applications.",
  },
  {
    title: "Logo and Branding Design",
    img: designing_5,
    text: "Developing distinctive logos and memorable brand identities that communicate your business values and vision.",
  },
  {
    title: "E-Commerce Website Design",
    img: designing_6,
    text: "Creating engaging e-commerce experiences designed to simplify shopping journeys and improve conversions.",
  },
  {
    title: "Landing Page Design",
    img: designing_7,
    text: "Designing conversion-focused landing pages that generate leads, increase sales, and support marketing campaigns.",
  },
  {
    title: "Custom Website Graphics",
    img: designing_8,
    text: "Creating custom banners, icons, and visual elements that integrate seamlessly with your digital brand identity.",
  },
  {
    title: "Graphics & Illustration",
    img: designing_9,
    text: "Designing bespoke illustrations and visual assets tailored to your brand's unique story and personality.",
  },
  {
    title: "Corporate Presentation",
    img: designing_10,
    text: "Creating polished and professional presentations that communicate complex business ideas with clarity.",
  },
  {
    title: "Packaging Design",
    img: designing_11,
    text: "Creating attractive and functional packaging that communicates your brand and connects with your customers.",
  },
  {
    title: "Print Design",
    img: designing_12,
    text: "Designing eye-catching flyers, brochures, posters, and print materials that leave a lasting impression.",
  },
];

const Website_designing = () => {
  const [visibleProjects, setVisibleProjects] = useState(12);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, designs.length));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleProjects(12);
      } else if (window.innerWidth >= 648) {
        setVisibleProjects(6);
      } else {
        setVisibleProjects(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-20 lg:py-24 bg-bgFirstBlue overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 w-[450px] h-[450px] rounded-full bg-primaryBlue/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[450px] h-[450px] rounded-full bg-secondaryPurple/[0.07] blur-[130px] pointer-events-none" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:55px_55px] pointer-events-none" />

      <div className="customContainer !my-0 relative z-10">

        {/* ================= HEADING ================= */}

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-12 lg:mb-14">

          <span className="inline-block text-xs sm:text-sm font-medium uppercase tracking-[0.16em] text-primaryBlue mb-3">
            Creative Design Solutions
          </span>

          <h2 className="H2 font-bold text-white leading-tight">
            Design That Looks Great.
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple via-purple-400 to-primaryBlue">
              Experiences That Perform.
            </span>
          </h2>

          <p className="P text-white/55 leading-relaxed max-w-2xl mx-auto mt-5">
            From high-converting websites and intuitive interfaces to branding and digital graphics, we create meaningful visual experiences built around your audience and business goals.
          </p>

        </motion.div>

        {/* ================= CARDS ================= */}

        <DesignGrid designs={designs} visibleProjects={visibleProjects} />

        {/* ================= LOAD MORE ================= */}

        {visibleProjects < designs.length && (
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex justify-center mt-10">

            <button onClick={handleLoadMore} className="group relative px-6 py-3 rounded-xl overflow-hidden bg-white/[0.07] text-sm font-medium text-white transition-all duration-300 hover:bg-white/[0.14] hover:-translate-y-1">

              <span className="relative z-10 flex items-center gap-2">
                Explore More
                <span className="text-base transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </span>

            </button>

          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Website_designing;