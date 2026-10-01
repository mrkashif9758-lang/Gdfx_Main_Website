import React from "react";
import { motion } from "framer-motion";
import { FaUsersGear } from "react-icons/fa6";
import { LuGitPullRequestCreateArrow } from "react-icons/lu";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";

const clientCards = [
  {
    number: "01",
    title: "Building Strong Customer Relationships at GDFX",
    description:
      "At GDFX, success stems from building strong client relationships, understanding their needs, and delivering personalized solutions to foster trust and long-term partnerships.",
    icon: <FaUsersGear size={26} className="text-primaryBlue" />,
  },
  {
    number: "02",
    title: "Creating Exceptional Customer Experiences",
    description:
      "GDFX prioritizes exceptional customer experiences, exceeding expectations with advanced technology, skilled professionals, and continuous feedback to deliver seamless, high-quality services in a competitive market.",
    icon: <LuGitPullRequestCreateArrow size={26} className="text-secondaryPurple" />,
  },
  {
    number: "03",
    title: "Building Trust Through Transparency and Reliability",
    description:
      "GDFX builds trust through transparency, reliable service, ethical practices, and a commitment to customer satisfaction, ensuring integrity and dependability in every customer relationship.",
    icon: <MdConnectWithoutContact size={26} className="text-primaryBlue" />,
  },
  {
    number: "04",
    title: "Commitment to Continuous Improvement",
    description:
      "GDFX sustains strong customer relations through continuous improvement, investing in team training, technology, and processes to meet and anticipate evolving customer needs with innovation and reliability.",
    icon: <RiUserCommunityLine size={26} className="text-secondaryPurple" />,
  },
];

function TrustedClient() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="customContainer !my-0 mb-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="H2 font-extrabold capitalize text-gray-900 leading-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We Are{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              Trusted By Our Clients
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-sm sm:text-base font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering excellence through dedication, transparency, and cutting-edge solutions.
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Left & Right Gradient Fade Mask for Smooth Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4 flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
          whileHover={{ animationPlayState: "paused" }} // Pause on hover effect
        >
          {/* Duplicate cards array to create a seamless infinite loop */}
          {[...clientCards, ...clientCards, ...clientCards].map((client, index) => (
            <div
              key={index}
              className="w-[380px] sm:w-[420px] p-8 rounded-[2.5rem] bg-white border border-purple-100 shadow-[0_15px_35px_rgba(147,51,234,0.06)] hover:shadow-[0_25px_50px_rgba(147,51,234,0.15)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden flex-shrink-0"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-2xl group-hover:bg-purple-200/70 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {client.icon}
                  </div>
                  <span className="text-2xl font-black text-purple-200 group-hover:text-primaryBlue transition-colors duration-300">
                    {client.number}
                  </span>
                </div>

                <h4 className="H5 mb-3 leading-snug font-extrabold text-gray-900 relative z-10">
                  {client.title}
                </h4>
                <p className="text-gray-600 P text-sm sm:text-base leading-relaxed relative z-10">
                  {client.description}
                </p>
              </div>

              <div className="mt-6 w-12 h-1 bg-purple-200 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-secondaryPurple group-hover:to-primaryBlue transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustedClient;