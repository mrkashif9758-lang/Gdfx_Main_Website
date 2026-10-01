import { useEffect, useState, useRef } from "react";
import { HiringFormApi } from "../../redux/api/api";
import { useParams } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaFileUpload } from "react-icons/fa";

const HiringForm = ({ showPopup, setShowPopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const { jobId } = useParams();
  const popupRef = useRef(null);

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setResume(reader.result);
          setFileName(file.name);
        }
      };
    }
  };

  const handlerFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await HiringFormApi(name, email, phone, resume, jobId);
    setName("");
    setEmail("");
    setPhone("");
    setFileName("");
    setLoading(false);
    setShowPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div
            ref={popupRef}
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
          >
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowPopup(false)}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Hiring Form</h2>
            <form className="flex flex-col gap-3" onSubmit={handlerFormSubmit}>
              {/* Name Field */}
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-500" />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="pl-10 pr-3 py-2 border rounded-md w-full"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="pl-10 pr-3 py-2 border rounded-md w-full"
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-500" />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  type="number"
                  name="phone"
                  placeholder="Your Phone"
                  className="pl-10 pr-3 py-2 border rounded-md w-full"
                />
              </div>

              {/* File Upload */}
              <div>
                <div className="relative">
                  <input
                    onChange={handleFileChange}
                    type="file"
                    name="file"
                    accept="application/pdf"
                    id="file-upload"
                    className="hidden " // Hide the file input
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center cursor-pointer py-2 px-2 border rounded-md text-gray-500"
                  >
                    <FaFileUpload className="mr-2 text-gray-500" /> {/* Icon */}
                    {fileName ? fileName : "Upload Resume"}{" "}
                    {/* Display file name or default text */}
                  </label>
                </div>
              </div>
              {!loading ? (
                <button
                  type="submit"
                  className="bg-primaryBlue text-white py-2 rounded-md hover:bg-primaryBlue w-full"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  disabled={true}
                  className="bg-primaryBlue text-white py-2 rounded-md hover:bg-primaryBlue w-full"
                >
                  Loading...
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HiringForm;
