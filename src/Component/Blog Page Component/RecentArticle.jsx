import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { getActiveBlogs } from "../../lib/Blogs"; // Adjust path
import logo from "../../assets/logo/logo.webp";

const RecentArticle = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const fetchBlogs = async (page) => {
    setLoading(true);
    try {
      const response = await getActiveBlogs(page, 6);
      if (response.success) {
        setBlogs(response.blogs);
        setPagination(response.pagination);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchBlogs(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Modern Clean Skeleton Loader Component
  const BlogSkeleton = () => (
    <div className="animate-pulse bg-slate-50 border border-slate-200/60 rounded-2xl p-4">
      <div className="w-full mb-5 h-[220px] bg-slate-200 rounded-xl"></div>
      <div className="h-5 bg-slate-200 rounded-full w-1/3 mb-4"></div>
      <div className="h-7 bg-slate-200 rounded-lg w-full mb-3"></div>
      <div className="h-4 bg-slate-200 rounded w-5/6 mb-6"></div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
        <div className="h-4 w-24 bg-slate-200 rounded"></div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white text-slate-900 relative">
      <div className=" max-w-7xl mx-auto !my-0">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-100">
    <div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#7000ff]/10 text-[#7000ff] border border-[#7000ff]/20 inline-block mb-3">
              Our Publications
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Recent{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7000ff] via-[#9333ea] to-[#c084fc]">
                Articles
              </span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-base leading-relaxed">
            Stay updated with the latest technological paradigms, architectural patterns, and engineering insights.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <BlogSkeleton key={i} />)
          ) : blogs.length > 0 ? (
            blogs.map((item) => (
              <Link
                to={`/${item.categories[0]?.slug || "general"}/${item.slug}`}
                key={item._id}
                className="group flex flex-col"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              >
                <div className="flex-1 flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-[#00f0ff]/50 transition-all duration-300">
                  <div>
                    {/* Thumbnail Container */}
                    <div className="w-full h-[230px] relative overflow-hidden bg-slate-100">
                      <img
                        src={item.image?.url}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt={item.image?.alt || "Blog Thumbnail"}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold bg-white/90 backdrop-blur-md text-[#7000ff] shadow-sm rounded-full uppercase tracking-wider">
                          {item.categories[0]?.name || "General"}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Body */}
                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#7000ff] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed font-normal">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-2.5">
                      <img src={logo} className="bg-gray-700 w-7 h-7 rounded-full object-contain bg-slate-100 border border-slate-200" alt="Author" />
                      <span className="text-xs text-slate-800 font-semibold">{item.author?.name || "Admin"}</span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {new Date(item.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-24 text-center text-slate-400 font-medium">
              No articles found.
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {pagination.totalPages > 1 && (
          <div className="flex justify-between items-center pt-10 border-t border-slate-100 mt-16">
            <button
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-slate-700 bg-slate-50 border border-slate-200 transition-all ${
                pagination.currentPage === 1 
                  ? "opacity-0 pointer-events-none" 
                  : "hover:bg-slate-100 hover:text-[#7000ff]"
              }`}
            >
              <GoArrowLeft size={18} /> Previous
            </button>

            {/* Desktop Numeric Indicators */}
            <div className="hidden sm:flex gap-2">
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => handlePageChange(num)}
                  className={`w-10 h-10 rounded-xl font-semibold transition-all ${
                    pagination.currentPage === num
                      ? "bg-gradient-to-r from-[#00f0ff] to-[#7000ff] text-white shadow-md shadow-[#7000ff]/25"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Mobile Page Tracker */}
            <div className="sm:hidden text-slate-600 font-medium text-sm">
              Page {pagination.currentPage} of {pagination.totalPages}
            </div>

            <button
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-slate-700 bg-slate-50 border border-slate-200 transition-all ${
                pagination.currentPage === pagination.totalPages 
                  ? "opacity-0 pointer-events-none" 
                  : "hover:bg-slate-100 hover:text-[#7000ff]"
              }`}
            >
              Next <GoArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentArticle;