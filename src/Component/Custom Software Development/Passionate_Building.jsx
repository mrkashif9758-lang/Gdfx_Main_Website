import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Passionate_Building = () => {
  const navigate = useNavigate();
  const [visibleCategories, setVisibleCategories] = useState(4);

  const handleLoadMore = () => {
    setVisibleCategories((prevVisible) => prevVisible + 4);
  };

  const categories = [
    {
      title: "1. Finance and Accounting",
      items: [
        { id: 1, title: "Financial Management Systems", description: "Manage financial planning, budgeting, and cash flow with precision." },
        { id: 2, title: "Accounting Software", description: "Automate bookkeeping, tax calculations, and financial reporting." },
        { id: 3, title: "Payroll Management Systems", description: "Simplify employee payment processing, tax deductions, and benefits." },
        { id: 4, title: "Investment Management Platforms", description: "Track portfolios, analyze market trends, and optimize strategies." },
      ],
    },
    {
      title: "2. Healthcare",
      items: [
        { id: 1, title: "Hospital Management Systems", description: "Manage hospital operations like appointments, billing, and patient records." },
        { id: 2, title: "Electronic Health Records (EHR)", description: "Digitize patient data for easy access, sharing, and management." },
        { id: 3, title: "Patient Management Systems", description: "Optimize patient scheduling, care tracking, and communication." },
        { id: 4, title: "Medical Billing Software", description: "Automate billing processes, insurance claims, and payment tracking." },
        { id: 5, title: "Telemedicine Platforms", description: "Facilitate remote patient consultations and healthcare services." },
      ],
    },
    {
      title: "3. Education",
      items: [
        { id: 1, title: "Learning Management Systems (LMS)", description: "Centralize training, course delivery, and student progress tracking." },
        { id: 2, title: "Student Information Systems (SIS)", description: "Manage student records, enrollments, and academic data." },
        { id: 3, title: "Exam and Assessment Software", description: "Streamline examination creation, grading, and analytics." },
        { id: 4, title: "School Administration Software", description: "Automate school operations, staff management, and communication." },
        { id: 5, title: "Virtual Classroom Platforms", description: "Enable interactive online learning environments." },
      ],
    },
    {
      title: "4. Hospitality and Tourism",
      items: [
        { id: 1, title: "Hotel Management Systems", description: "Oversee reservations, guest services, and housekeeping efficiently." },
        { id: 2, title: "Travel Booking Software", description: "Simplify travel arrangements, bookings, and itinerary planning." },
        { id: 3, title: "Restaurant Management Systems", description: "Manage orders, inventory, and staff effectively." },
        { id: 4, title: "Event Management Software", description: "Plan and execute events seamlessly with scheduling tools." },
        { id: 5, title: "CRM for Hospitality", description: "Enhance guest satisfaction and retention with personalized services." },
      ],
    },
    {
      title: "5. Retail and E-commerce",
      items: [
        { id: 1, title: "Point of Sale (POS) Systems", description: "Simplify in-store transactions and inventory tracking." },
        { id: 2, title: "Inventory Management Software", description: "Track, manage, and replenish stock accurately." },
        { id: 3, title: "E-commerce Platforms", description: "Build and manage online stores for selling products or services." },
        { id: 4, title: "Order & Delivery Management", description: "Streamline order processing and last-mile delivery logistics." },
        { id: 5, title: "Customer Loyalty Programs", description: "Reward customer loyalty and boost retention with tailored programs." },
      ],
    },
    {
      title: "6. Logistics and Supply Chain",
      items: [
        { id: 1, title: "Supply Chain Software", description: "Optimize procurement, production, and distribution processes." },
        { id: 2, title: "Transportation Management (TMS)", description: "Plan, execute, and track transportation logistics efficiently." },
        { id: 3, title: "Fleet Management Software", description: "Monitor and manage vehicle operations and maintenance." },
        { id: 4, title: "Warehouse Management (WMS)", description: "Enhance storage, picking, and shipping operations." },
        { id: 5, title: "Freight & Cargo Management", description: "Simplify cargo tracking and documentation processes." },
      ],
    },
    {
      title: "7. Manufacturing and Industrial",
      items: [
        { id: 1, title: "ERP Systems", description: "Integrate and manage business processes for enhanced efficiency." },
        { id: 2, title: "Production Management", description: "Monitor production schedules, costs, and outputs." },
        { id: 3, title: "Quality Control Systems", description: "Ensure product quality meets regulatory standards." },
        { id: 4, title: "Inventory & Asset Management", description: "Optimize resource allocation and reduce waste." },
        { id: 5, title: "Maintenance Management", description: "Track and schedule equipment maintenance for continuity." },
      ],
    },
    {
      title: "8. Human Resources",
      items: [
        { id: 1, title: "HRMS", description: "Streamline HR operations, from recruitment to payroll." },
        { id: 2, title: "Applicant Tracking (ATS)", description: "Manage hiring processes with candidate tracking." },
        { id: 3, title: "Time & Attendance Tracking", description: "Monitor employee attendance, shifts, and hours accurately." },
        { id: 4, title: "Learning & Development", description: "Enhance workforce skills through structured training." },
        { id: 5, title: "Performance Management", description: "Evaluate employee performance and productivity." },
      ],
    },
    {
      title: "9. Real Estate",
      items: [
        { id: 1, title: "Property Management", description: "Oversee property listings, tenant interactions, and lease agreements." },
        { id: 2, title: "Real Estate CRM", description: "Manage client relationships and streamline transactions." },
        { id: 3, title: "Lease & Tenant Tools", description: "Simplify lease tracking and tenant communication." },
        { id: 4, title: "Facility Management", description: "Optimize building maintenance and operations." },
        { id: 5, title: "Listing Platforms", description: "Showcase properties and attract buyers or renters." },
      ],
    },
    {
      title: "10. Construction and Engineering",
      items: [
        { id: 1, title: "Project Management", description: "Plan, track, and execute construction projects effectively." },
        { id: 2, title: "Estimation & Bidding", description: "Generate accurate cost estimates and manage bids." },
        { id: 3, title: "Workforce Scheduling", description: "Assign tasks and schedule resources efficiently." },
        { id: 4, title: "Safety & Compliance", description: "Ensure workplace safety and regulatory compliance." },
        { id: 5, title: "BIM Tools", description: "Enhance project visualization and collaboration." },
      ],
    },
    {
      title: "11. Energy and Utilities",
      items: [
        { id: 1, title: "Energy Management", description: "Monitor and reduce energy consumption for cost efficiency." },
        { id: 2, title: "Utility Billing Software", description: "Automate customer billing and payment tracking." },
        { id: 3, title: "Renewable Energy Monitoring", description: "Track solar, wind, and other renewable outputs." },
        { id: 4, title: "Grid Management Systems", description: "Ensure reliable energy distribution and performance." },
        { id: 5, title: "Environmental Software", description: "Monitor environmental impacts and compliance." },
      ],
    },
    {
      title: "12. Entertainment and Media",
      items: [
        { id: 1, title: "CMS Platforms", description: "Manage and distribute digital content seamlessly." },
        { id: 2, title: "Production Software", description: "Oversee media production schedules and resources." },
        { id: 3, title: "Audience Engagement", description: "Enhance viewer interactions and experiences." },
        { id: 4, title: "Digital Asset Management", description: "Organize and retrieve digital files efficiently." },
        { id: 5, title: "Ticketing Systems", description: "Manage bookings for events or performances." },
      ],
    },
    {
      title: "13. Agriculture and Farming",
      items: [
        { id: 1, title: "Farm Management Software", description: "Track crop yields, expenses, and farm operations." },
        { id: 2, title: "Crop Monitoring Tools", description: "Use IoT for precision farming and yield optimization." },
        { id: 3, title: "Livestock Systems", description: "Oversee animal health, feeding, and production." },
        { id: 4, title: "Supply Chain Platforms", description: "Connect farmers with markets effectively." },
        { id: 5, title: "AgriTech IoT Solutions", description: "Enable smart farming with IoT-driven insights." },
      ],
    },
    {
      title: "14. Legal and Compliance",
      items: [
        { id: 1, title: "Case Management Systems", description: "Manage legal cases, documentation, and timelines." },
        { id: 2, title: "Document Management", description: "Organize legal files and streamline document retrieval." },
        { id: 3, title: "Compliance Tracking", description: "Ensure regulatory adherence across all operations." },
        { id: 4, title: "Contract Lifecycle (CLM)", description: "Automate contract drafting, negotiation, and storage." },
        { id: 5, title: "IP Management Systems", description: "Protect and track intellectual property rights." },
      ],
    },
    {
      title: "15. Government & Public Sector",
      items: [
        { id: 1, title: "Citizen CRM", description: "Manage public services and citizen interactions efficiently." },
        { id: 2, title: "Tax Management Systems", description: "Automate tax collection and compliance processes." },
        { id: 3, title: "Public Administration", description: "Enhance governance through streamlined digital processes." },
        { id: 4, title: "Infrastructure Management", description: "Track and maintain public assets effectively." },
        { id: 5, title: "Emergency Response", description: "Coordinate disaster management and relief efforts." },
      ],
    },
    {
      title: "16. Telecommunication",
      items: [
        { id: 1, title: "Network Management", description: "Optimize telecom infrastructure and performance." },
        { id: 2, title: "Billing Platforms", description: "Manage customer subscriptions and payments seamlessly." },
        { id: 3, title: "Customer Support Tools", description: "Improve user satisfaction with responsive service platforms." },
        { id: 4, title: "IoT Device Management", description: "Oversee connected devices efficiently at scale." },
        { id: 5, title: "Telecom Analytics", description: "Gain actionable insights into usage and network efficiency." },
      ],
    },
    {
      title: "17. Non-Profit and NGOs",
      items: [
        { id: 1, title: "Donor Management Software", description: "Track donor contributions and long-term engagement." },
        { id: 2, title: "Volunteer Platforms", description: "Streamline volunteer scheduling and communication." },
        { id: 3, title: "Fundraising Tools", description: "Optimize campaigns and expand donor outreach." },
        { id: 4, title: "Campaign Tracking", description: "Monitor and analyze non-profit campaign performance." },
        { id: 5, title: "Impact Assessment", description: "Measure project outcomes and societal effectiveness." },
      ],
    },
    {
      title: "18. Transportation & Aviation",
      items: [
        { id: 1, title: "Fleet Management", description: "Monitor vehicle health, optimal routes, and fuel efficiency." },
        { id: 2, title: "Airport Management", description: "Streamline airport ground operations and passenger journeys." },
        { id: 3, title: "Ticketing Platforms", description: "Facilitate smooth ticket bookings and cancellations." },
        { id: 4, title: "Cargo Software", description: "Oversee freight handling, storage, and tracking." },
        { id: 5, title: "Route Optimization", description: "Plan cost-effective and timely transit routes." },
      ],
    },
    {
      title: "19. Technology & IT Services",
      items: [
        { id: 1, title: "ITSM Platforms", description: "Manage IT services, tickets, and technical support seamlessly." },
        { id: 2, title: "DevOps Tools", description: "Enhance software development pipelines and deployments." },
        { id: 3, title: "Customer Support Systems", description: "Handle support tickets and resolve client issues promptly." },
        { id: 4, title: "Project Management", description: "Keep tech projects on track, scoped, and within budget." },
        { id: 5, title: "Cybersecurity Monitoring", description: "Detect, analyze, and mitigate digital threats effectively." },
      ],
    },
    {
      title: "20. Retail Banking & Insurance",
      items: [
        { id: 1, title: "Core Banking Software", description: "Automate and manage everyday institutional banking operations." },
        { id: 2, title: "Insurance Systems", description: "Streamline policy creation, renewals, and claims processing." },
        { id: 3, title: "Fraud Detection Tools", description: "Identify and prevent suspicious or fraudulent transactions." },
        { id: 4, title: "Risk Management", description: "Assess, evaluate, and mitigate financial and operational risks." },
        { id: 5, title: "Customer Engagement", description: "Build stronger client relationships and loyalty programs." },
      ],
    },
  ];

  const containerV = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-24 bg-bgFirstBlue relative overflow-hidden">
      <div className="max-w-7xl mx-auto  !my-0 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="H2 font-bold capitalize text-white leading-tight mb-4">
            We are{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              passionate in building?
            </span>
          </h2>
          <p className="P text-mutedGray-c1 leading-relaxed">
            Our custom software development services provide scalable, secure, and innovative solutions tailored to your business needs, optimizing performance, efficiency, and growth with expert development.
          </p>
        </div>

        <motion.div
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {categories.slice(0, visibleCategories).map((category, index) => (
            <motion.div
              key={index}
              className="h-[380px] w-full [perspective:1000px] cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Flip Card Wrapper */}
              <div
                className="
          relative h-full w-full rounded-2xl
          transition-all duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
              >
                {/* FRONT */}
                <div
                  className="
            absolute inset-0 h-full w-full
            rounded-2xl
            bg-white/90
          
            backdrop-blur-md
            backdrop-saturate-150
            p-8
            flex flex-col justify-between
            [backface-visibility:hidden]
            shadow-[0_8px_30px_rgba(15,23,42,0.06)]
          "
                >
                  <div>
                    <span
                      className="
                inline-block
                px-3 py-1
                rounded-full
                bg-slate-100/70
                backdrop-blur-md
                text-primaryBlue
                text-xs font-semibold
                tracking-wider uppercase
                mb-4
              "
                    >
                      Industry Solution
                    </span>

                    <h3 className="H3 font-bold text-slate-900 tracking-wide mb-2">
                      {category.title}
                    </h3>

                    <p className="P text-slate-600 text-sm leading-relaxed">
                      Explore tailored software solutions engineered to elevate
                      operational excellence in this sector.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xs text-slate-500 font-medium">
                      Hover to view {category.items.length} solutions
                    </span>

                    <div
                      className="
                w-10 h-10
                rounded-xl
                bg-slate-100/80
                backdrop-blur-md
                flex items-center justify-center
                text-slate-700
                group-hover:bg-primaryBlue
                group-hover:text-white
                transition-all duration-300
              "
                    >
                      <MdArrowOutward className="text-xl rotate-[45deg]" />
                    </div>
                  </div>
                </div>

                {/* BACK */}
                {/* ================= BACK ================= */}
                <div
                  onClick={() => navigate("/contact")}
                  className="
    absolute inset-0
    h-full w-full
    rounded-2xl

    bg-white/90
    backdrop-blur-md
    backdrop-saturate-150

    p-6
    flex flex-col

    [transform:rotateY(180deg)]
    [backface-visibility:hidden]

    overflow-y-auto
    [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden

    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
  "
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 shrink-0">
                    <h4 className="H5 font-bold text-slate-900">
                      {category.title}
                    </h4>

                    <span
                      className="
        text-xs
        px-3 py-1
        rounded-full
        bg-slate-100/80
        text-primaryBlue
        font-semibold
        whitespace-nowrap
      "
                    >
                      Click to Connect
                    </span>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className="
          rounded-xl
          bg-white/90
          backdrop-blur-md
          px-3 py-2
        "
                      >
                        <h5 className="text-sm text-slate-900 font-semibold mb-1">
                          {item.title}
                        </h5>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleCategories < categories.length && (
          <div className="text-center mt-14 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3.5 rounded-xl font-medium text-white shadow-lg bg-gradient-to-r from-primaryBlue to-secondaryPurple hover:shadow-xl hover:shadow-primaryBlue/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              Load More
              <MdArrowOutward className="text-white text-xl transition-transform duration-300 rotate-[45deg] group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Passionate_Building;