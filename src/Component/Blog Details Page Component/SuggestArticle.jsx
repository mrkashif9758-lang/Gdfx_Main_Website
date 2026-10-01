import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo/logo.webp";
import { getRecentBlogs } from "../../lib/Blogs"; // Apna sahi path dalein

const SuggestArticle = () => {
  const { blogSlug } = useParams(); // URL se current blog ka slug le rahe hain
  const [suggestedBlogs, setSuggestedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        setLoading(true);
        const data = await getRecentBlogs(7); // 4 blogs fetch kar rahe hain
        if (data.success) {
          // Current blog ko hata kar baki dikha rahe hain
          const filtered = data.blogs.filter((item) => item.slug !== blogSlug);
          // Sirf pehle 3 dikhayenge layout ke hisaab se
          setSuggestedBlogs(filtered.slice(0, 6));
        }
      } catch (error) {
        console.error("Error loading suggested blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentBlogs();
  }, [blogSlug]);

  if (loading) return null; // Ya yahan chota skeleton dal sakte hain
  if (suggestedBlogs.length === 0) return null;

  return (
    <section className="py-20 bg-black">
      <div className="customContainer !my-0">
        <h3 className="H4 font-bold text-white mb-10">Suggested Articles</h3>
        
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {suggestedBlogs.map((item) => (
            <Link
              to={`/${item.categories[0].slug}/${item.slug}`}
              key={item._id}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group"
            >
              <div className="flex flex-col h-full">
                {/* Image Container */}
                <div className="w-full mb-4 h-[250px] xs:p-4 p-3 bg-primary-gradient rounded-md overflow-hidden">
                  <img
                    src={item.image?.url}
                    className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    alt={item.image?.alt || "Suggested-Blog"}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex gap-3 mb-4">
                    {item.categories?.length > 0 && (
                      <button className="px-3 py-1 text-[12px] font-bold bg-danger-gradient rounded-full text-white uppercase">
                        {item.categories[0].name}
                      </button>
                    )}
                  </div>

                  <h2 className="mb-3 H5 font-extrabold text-white leading-[1.2] line-clamp-2 group-hover:text-primaryBlue transition-colors">
                    {item.title}
                  </h2>

                  <p className="mb-4 text-navyBlue-c1 P line-clamp-3 opacity-80">
                    {item.excerpt}
                  </p>

                  {/* Footer Info */}
                  <div className="mt-auto flex gap-3 items-center pt-2">
                    <img
                      src={logo}
                      draggable={false}
                      className="w-12 h-auto object-contain opacity-80"
                      alt="GDFX-Logo"
                    />
                    <div className="flex flex-col">
                       <p className="text-[12px] text-white/50">Published on</p>
                       <p className="text-navyBlue-c2 text-sm font-medium">
                        {new Date(item?.publishedAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestArticle;