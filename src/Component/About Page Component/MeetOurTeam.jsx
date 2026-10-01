import { motion } from "framer-motion";
import member1 from "../../assets/Team/GDFX - Kashif.jpeg";
import member2 from "../../assets/Team/GDFX - Shah Alam.jpeg";
import member3 from "../../assets/Team/Shahrukh.jpg";
import member4 from "../../assets/Team/Rajeev.jpg";
import member5 from "../../assets/Team/Ajit.jpg";
import member6 from "../../assets/Team/GDFX - Khushboo.png";
import founder1 from "../../assets/Team/GDFX - Anuj Sinha.png";
// import founder2 from "../../assets/Team/Ra.jpg";

const teamMembers = [
  {
    name: "Moh Kashif",
    role: "Frontend Developer",
    desc: "Passionate about building modern, responsive, and high-performance web experiences with clean, scalable, and reusable frontend architectures.",
    image: member1,
    rotateDeg: -2,
  },
  {
    name: "Shah Alam",
    role: "Full Stack Developer",
    desc: "Passionate about building scalable end-to-end web applications, combining intuitive frontend experiences with robust backend systems, secure APIs, and efficient database architecture.",
    image: member2,
    rotateDeg: 2,
  },
  {
    name: "Shahrukh Khan",
    role: "Full Stack Developer",
    desc: "Building seamless digital experiences with modern frontend technologies, robust backend systems, and scalable architectures.",
    image: member3,
    rotateDeg: -1.5,
  },
    {
    name: "Rajeev Ranjan Tiwari",
    role: "Frontend Architect",
    desc: "Passionate about creating fluid user experiences and clean modular component architectures.",
    image: member4,
    rotateDeg: -2,
  },
  {
    name: "Ajit",
    role: "Full Stack Team Lead",
    desc: "Steady and analytical, Rahul ensures strong Full-Stack architecture with clean code and thoughtful system design.",
    image: member5,
    rotateDeg: 2,
  },
  {
    name: "Khushboo Singh",
    role: "Digital Marketing Executive",
    desc: "Transforming complex workflows into elegant, intuitive, and human-centered digital experiences.",
    image: member6,
    rotateDeg: -1.5,
  },
];

const founders = [
  {
    name: "Anuj Kumar Sinha",
    role: "Co-Founder & CEO",
    desc: "Driving the global vision and strategic growth of the company with a passion for disruptive tech.",
    image: founder1,
  },
//   {
//     name: "Ananya Roy",
//     role: "Co-Founder & CTO",
//     desc: "Overseeing engineering excellence and pushing the boundaries of scalable cloud infrastructure.",
//     image: founder2,
//   },
];

const MeetOurTeam = () => {
  return (
    <section className="bg-bgSecondBlue py-24 relative overflow-hidden text-white">
      <div className="customContainer !my-0">
        
        {/* TOP HEADER SECTION */}
        <div className="customContainer grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg font-semibold mb-3 tracking-wide"
            >
              <span className="text-secondaryPurple">Together,</span> we bring worlds to life.
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="H2 font-extrabold uppercase tracking-tight text-white text-4xl sm:text-5xl"
            >
              Meet Our Team
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium"
            >
              From game designers and 3D artists to developers and strategists, our team thrives on imagination and innovation. We collaborate closely with every client, diving into the vision, shaping ideas, and building experiences that feel alive.
            </motion.p>
          </div>
        </div>

        {/* THE FOUNDERS SECTION */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-secondaryPurple"
            >
              The Founders
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg font-medium"
            >
              The Two Pillars of our Company, always up to support and guide our team in every possible way
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative rounded-3xl overflow-hidden bg-white/5 border border-purple-500/20 backdrop-blur-xl group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 relative z-20 bg-gray-950/80 backdrop-blur-md">
                  <h4 className="H4 font-bold text-white mb-1">{founder.name}</h4>
                  <p className="text-primaryBlue text-sm font-semibold mb-3">{founder.role}</p>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{founder.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TEAM MEMBERS SECTION WITH HEADER */}
        <div className='customContainer'>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-secondaryPurple"
            >
              Our Core Leadership Team
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg font-medium"
            >
              Meet the brilliant minds driving our engineering, design, and product excellence forward.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.03, 
                  rotate: member.rotateDeg * -1.5, 
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
                className="relative h-[480px] rounded-[2.5rem] overflow-hidden bg-gray-900 border border-purple-500/30 shadow-2xl group flex flex-col justify-end cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>

                {/* Top Badge Icon */}
                <div className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-gradient-to-tr from-blue-700 via-purple-600 to-fuchsia-600 flex items-center justify-center text-white shadow-lg border border-white/20 transform group-hover:rotate-180 transition-transform duration-500">
                  <span className="text-xl font-bold">*</span>
                </div>

                {/* Bottom Blue Box (Appears on Hover) */}
                <div className="relative z-20 bg-blue-700/95 backdrop-blur-xl p-6 rounded-t-[2rem] border-t border-blue-400/40 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out shadow-[0_-10px_30px_rgba(29,78,216,0.5)]">
                  
                  <h4 className="H5 font-extrabold text-white mb-1 tracking-wide">{member.name}</h4>
                  <p className="text-blue-200 text-xs font-bold tracking-wider uppercase mb-3 block flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
                    {member.role}
                  </p>
                  
                  <p className="text-blue-50 text-xs sm:text-sm leading-relaxed mb-4">
                    {member.desc}
                  </p>

                  <div className="pt-3 border-t border-blue-500/50 flex items-center justify-between">
                    <span className="text-[11px] italic text-blue-200 font-semibold">“ Stacked. Stuck. Still Smiling ”</span>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetOurTeam;