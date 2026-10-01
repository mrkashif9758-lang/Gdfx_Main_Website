import React, { useState, useRef } from "react";
import { BsUpload } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { registerNgo } from "../../lib/ngo"; 
import { uploadPDF } from "../../lib/Blogs"; 
import { toast } from "react-hot-toast";

const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPersonName: "",
    email: "",
    phoneNumber: "",
    website: "",
    organizationType: "",
    registrationFile: null,
    registeredCity: "",
    missionFocus: "",
    additionalMessage: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === "registrationFile") {
      const file = files[0];
      // Validation: Sirf PDF allow karein
      if (file && file.type !== "application/pdf") {
        toast.error("Please select a valid PDF file only");
        e.target.value = null; // Reset input
        return;
      }
      setFormData((prev) => ({ ...prev, registrationFile: file }));
    } else if (name === "phoneNumber") {
      // Logic: Sirf numbers allow honge (Character block)
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    setApiError("");
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.organizationName.trim()) newErrors.organizationName = "Required";
    if (!formData.contactPersonName.trim()) newErrors.contactPersonName = "Required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid Email";
    if (!formData.phoneNumber || formData.phoneNumber.length < 10) newErrors.phoneNumber = "Enter valid phone number";
    if (!formData.organizationType) newErrors.organizationType = "Select type";
    if (!formData.registeredCity.trim()) newErrors.registeredCity = "Required";
    if (!formData.missionFocus.trim()) newErrors.missionFocus = "Required";
    if (!formData.website.trim()) newErrors.website = "Required";
    if (!formData.registrationFile) newErrors.registrationFile = "PDF document is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly");
      return;
    }

    setIsSubmitting(true);
    setApiError("");

    try {
      let uploadDocResponse = null;

      // 1. Pehle PDF upload hoga
      if (formData.registrationFile) {
        // console.log("Uploading PDF...");
        uploadDocResponse = await uploadPDF(formData.registrationFile, "ngos/registrations");
      }

      // 2. Payload prepare karein (Backend fields matching)
      const finalPayload = {
        organizationName: formData.organizationName,
        contactPersonName: formData.contactPersonName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        website: formData.website,
        organizationType: formData.organizationType,
        registeredCity: formData.registeredCity,
        missionFocusArea: formData.missionFocus,
        additionalMessage: formData.additionalMessage,
        uploadDoc: uploadDocResponse ? {
          url: uploadDocResponse.url,
          fileId: uploadDocResponse.fileId
        } : null
      };

      // 3. Register NGO API Hit
      const response = await registerNgo(finalPayload);
      
      if (response) {
        setSubmitSuccess(true);
        toast.success("Application submitted successfully!");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      const msg = error.response?.data?.message || error.message || "Failed to submit";
      setApiError(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Get In <span className="text-blue-400">Touch</span>
        </h2>

        <AnimatePresence>
          {submitSuccess ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="p-10 bg-blue-500/10 border border-blue-500/50 rounded-2xl text-center"
            >
              <h3 className="text-2xl font-bold text-blue-400">Success!</h3>
              <p className="mt-2 text-gray-300">Application submitted. We'll contact you soon.</p>
              <button onClick={() => setSubmitSuccess(false)} className="mt-6 text-blue-400 underline">Submit New</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input error={errors.organizationName} name="organizationName" placeholder="Org Name *" value={formData.organizationName} onChange={handleChange} />
                <Input error={errors.contactPersonName} name="contactPersonName" placeholder="Contact Person *" value={formData.contactPersonName} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input type="email" error={errors.email} name="email" placeholder="Email *" value={formData.email} onChange={handleChange} />
                <Input type="text" error={errors.phoneNumber} name="phoneNumber" placeholder="Phone Number (Digits only) *" value={formData.phoneNumber} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input name="website" placeholder="Website URL *" value={formData.website} onChange={handleChange} />
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="px-4 py-3 bg-[#0a0a1a] border border-gray-800 rounded text-white outline-none"
                >
                  <option value="">Organization Type *</option>
                  <option value="Trust">Trust</option>
                  <option value="Society">Society</option>
                  <option value="Section 8 Company">Section 8 Company</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <div
                    onClick={handleFileClick}
                    className={`px-4 py-3 cursor-pointer border border-dashed rounded flex justify-between items-center bg-[#0a0a1a] transition-all ${errors.registrationFile ? 'border-red-500' : 'border-gray-700 hover:border-blue-500'}`}
                  >
                    <span className="text-gray-500 truncate">
                      {formData.registrationFile ? formData.registrationFile.name : "Upload PDF Registration *"}
                    </span>
                    <BsUpload />
                  </div>
                  <input type="file" ref={fileInputRef} name="registrationFile" onChange={handleChange} className="hidden" accept="application/pdf" />
                  {errors.registrationFile && <span className="text-red-500 text-xs mt-1">{errors.registrationFile}</span>}
                </div>
                <Input name="registeredCity" placeholder="City *" value={formData.registeredCity} onChange={handleChange} />
              </div>

              <textarea
                name="missionFocus"
                value={formData.missionFocus}
                onChange={handleChange}
                className="px-4 py-3 h-28 bg-[#0a0a1a] border border-gray-800 rounded text-white outline-none focus:border-blue-500"
                placeholder="Mission / Focus Area *"
              />

              <textarea
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleChange}
                className="px-4 py-3 h-20 bg-[#0a0a1a] border border-gray-800 rounded text-white outline-none"
                placeholder="Message (Optional)"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Submit Application"}
              </button>
            </form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Reusable Input Component to keep code clean
const Input = ({ type = "text", error, ...props }) => (
  <div className="flex flex-col w-full">
    <input
      type={type}
      {...props}
      className={`px-4 py-3 bg-[#0a0a1a] border rounded text-white outline-none transition-all focus:border-blue-500 ${error ? "border-red-500" : "border-gray-800"}`}
    />
    {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
  </div>
);

export default GetInTouchForm;