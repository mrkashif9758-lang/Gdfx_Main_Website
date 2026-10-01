import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogDetailsHeader from "../Component/Blog Details Page Component/BlogDetailsHeader";
import SuggestArticle from "../Component/Blog Details Page Component/SuggestArticle";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import { getBlogBySlug } from "../lib/Blogs";
import BlogDetailsSkeleton from "../Component/Blog Details Page Component/BlogDetailsSkeleton";
import BlogStickyForm from "../Component/Blog Details Page Component/BlogStickyForm";

const BlogDetails = () => {
  const { blogSlug } = useParams(); // URL se slug le rahe hain
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const response = await getBlogBySlug(blogSlug);
        if (response.success) {
          setBlogData(response.blog);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
    window.scrollTo(0, 0);
  }, [blogSlug]);

  if (loading) return <BlogDetailsSkeleton />;
  if (!blogData)
    return (
      <div className="min-h-screen pt-28 text-center text-white bg-bgFirstBlue">
        Blog not found.
      </div>
    );

  return (
    <>
      <Helmet>
        <title>{blogData?.seo?.metaTitle || blogData?.title}</title>
        <meta name="description" content={blogData?.seo?.metaDescription} />
        <meta name="keywords" content={blogData?.seo?.keywords?.join(", ")} />
        <link rel="canonical" href={window.location.href} />

        <meta property="og:title" content={blogData?.title} />
        <meta
          property="og:description"
          content={blogData?.seo?.metaDescription}
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        {blogData?.image?.url && (
          <meta property="og:image" content={blogData?.image?.url} />
        )}
      </Helmet>

      {/* Blog Data ko prop ke roop mein bhej rahe hain */}
      <div className=" bg-white">
        <div className="flex lg:flex-row flex-col gap-10 customContainer !my-0">
        <div className="lg:basis-[70%] basis-full">
          <BlogDetailsHeader singleBlog={blogData} />
        </div>
        <div className="lg:basis-[30%] basis-full">
          <BlogStickyForm/>
        </div>
      </div>
      </div>
      <SuggestArticle />
      <RequestCallback />
    </>
  );
};

export default BlogDetails;
