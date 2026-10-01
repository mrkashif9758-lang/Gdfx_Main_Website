import { api } from "./api";

export const uploadPDF = async (pdfFile, folder = "ngos/documents") => {
  try {
    const formData = new FormData();
    
    formData.append("file", pdfFile);
    formData.append("folder", folder);

    const { data } = await api.post("/images/upload-pdf", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      url: data.pdf.url,
      fileId: data.pdf.fileId,
      name: data.pdf.name,
      size: data.pdf.size,
    };
  } catch (error) {
    console.error("PDF upload error:", error.response || error);
    const message = error.response?.data?.message || "PDF upload failed";
    
    if (typeof toast !== 'undefined') {
      toast.error(message);
    }
    
    throw new Error(message);
  }
};

/**
 * Get all active / published blogs
 */
export const getActiveBlogs = async (page = 1, limit = 6) => {
  try {
    const { data } = await api.get(`/blogs?page=${page}&limit=${limit}`);
    return data; // Returns { success, blogs, pagination }
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch blogs");
  }
};
/**
 * Get blog by ID
 */
export const getBlogById = async (id) => {
  try {
    const { data } = await api.get(`/blogs/${id}`);
    return data;
  } catch (error) {
    console.error("Get blog API error:", error.response || error);
    return {
      data: null,
      error: error.response?.data?.message || "Failed to fetch blog",
    };
  }
};

/**
 * Get blog by slug
 */
export const getBlogBySlug = async (blogSlug) => {
  try {
    const { data } = await api.get(`/blogs/slug/${blogSlug}`);
    return data;
  } catch (error) {
    console.error("API Error Details:", error.response?.data || error.message);
    return {
      success: false,
      data: null,
      message: error.response?.data?.message || "Blog not found"
    };
  }
};

/**
 * Get blogs by category
 */
export const getArticlesByCategory = async (slug, page = 1) => {
  try {
    const { data } = await api.get(`/blogs/category/${slug}?page=${page}&limit=5`);
    return data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch blogs";
  }
};

/**
 * Get recent blogs
 */
export const getRecentBlogs = async (limit = 5) => {
  try {
    const { data } = await api.get(`/blogs/recent?limit=${limit}`, {
      headers: { "Cache-Control": "no-store" },
    });
    return data;
  } catch (error) {
    console.error("Get recent blogs API error:", error.response || error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch recent blogs",
    );
  }
};

/**
 * Get blogs for sitemap
 */
export const getBlogsForSitemap = async (params) => {
  try {
    const { data } = await api.get("/blogs/getAll", {
      params: {
        ...params,
        limit: params?.limit || 100,
        status: "published"
      }
    });

    return data;
  } catch (error) {
    const message = error.response?.data?.message || "Failed to fetch sitemap blogs";
    throw new Error(message);
  }
};