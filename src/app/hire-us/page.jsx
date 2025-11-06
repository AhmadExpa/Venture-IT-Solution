"use client";
import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { LuMessagesSquare, LuX, LuUpload } from "react-icons/lu";
import { TbLockCheck } from "react-icons/tb";
import GradientButton from "../components/common/GradientButton";

const Page = () => {
  const [selectedSolutions, setSelectedSolutions] = useState([]);
  const [budget, setBudget] = useState(50);
  const [dragActive, setDragActive] = useState(false);
  const [sendNDA, setSendNDA] = useState(false);
  const [callASAP, setCallASAP] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    businessEmail: "",
    companyName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    foundUs: "",
    partnershipType: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(
        () => setToast((s) => ({ ...s, show: false })),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const solutions = [
    {
      category: "Primary",
      items: [
        "Software Development & Product Engineering ",
        "Digital Transformation Engineering",
        " DevOps, Automation and Solution",
        " Security",
        "Cloud & Infrastructure Services",
        " Artificial Intelligence ",
        " Data Engineering & Analytics",
      ],
    },
  ];

  const handleSolutionClick = (solution) => {
    setSelectedSolutions((prev) =>
      prev.includes(solution)
        ? prev.filter((item) => item !== solution)
        : [...prev, solution]
    );
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "phoneNumber") {
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        setFormData((s) => ({ ...s, [id]: value }));
      }
    } else {
      setFormData((s) => ({ ...s, [id]: value }));
    }

    if (errors[id]) setErrors((s) => ({ ...s, [id]: "" }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    addFiles(selectedFiles);
  };

  const addFiles = (selectedFiles) => {
    const newFiles = selectedFiles.map((file) => ({
      file,
      id: crypto.randomUUID(),
      url: URL.createObjectURL(file),
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (id) => {
    setFiles((prev) => {
      const updatedFiles = prev.filter((file) => file.id !== id);
      const fileToRemove = prev.find((file) => file.id === id);
      if (fileToRemove) URL.revokeObjectURL(fileToRemove.url);
      return updatedFiles;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    } else if (e.type === "drop") {
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        addFiles(Array.from(e.dataTransfer.files));
      }
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const isImageFile = (type) => {
    return type.startsWith("image/");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessEmail) {
      newErrors.businessEmail = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail =
        "Please enter a valid email address (e.g., example@domain.com)";
    }

    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number can only contain digits";
    }

    if (!formData.foundUs) newErrors.foundUs = "Please select how you found us";
    if (!formData.partnershipType)
      newErrors.partnershipType = "Please select partnership type";
    if (!formData.projectDetails)
      newErrors.projectDetails = "Project details are required";
    if (selectedSolutions.length === 0)
      newErrors.solutions = "Please select at least one solution";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!validateForm()) {
      setToast({
        show: true,
        message: "Please fill in all required fields correctly",
        type: "error",
      });

      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    if (!captchaToken) {
      setToast({
        show: true,
        message: "Please check the reCAPTCHA box.",
        type: "error",
      });
      return;
    }

    try {
      const formDataObj = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      formDataObj.append(
        "selectedSolutions",
        JSON.stringify(selectedSolutions)
      );
      formDataObj.append("budget", budget);
      formDataObj.append("sendNDA", sendNDA);
      formDataObj.append("callASAP", callASAP);

      files.forEach(({ file }) => {
        formDataObj.append("files", file);
      });

      formDataObj.append("token", captchaToken);

      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) throw new Error(result.error || "Submission failed");

      setToast({
        show: true,
        message: "Form submitted successfully!",
        type: "success",
      });

      setFormData({
        businessEmail: "",
        companyName: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        foundUs: "",
        partnershipType: "",
        projectDetails: "",
      });
      setSelectedSolutions([]);
      setBudget(50);
      setFiles([]);
      setSendNDA(false);
      setCallASAP(false);
      setErrors({});
      setCaptchaToken(null);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setToast({
        show: true,
        message: "Submission failed: " + err.message,
        type: "error",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 md:py-36 py-20 px-4 sm:px-6 lg:px-8">
      {toast.show && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          } text-white min-w-[300px] flex justify-between items-center`}
        >
          <p className="">{toast.message}</p>
          <button
            onClick={() => setToast((s) => ({ ...s, show: false }))}
            className="ml-4 text-white hover:text-gray-200"
          >
            <LuX size={18} />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="md:flex gap-12">
          <div>
            <div className="md:w-[400px] w-full">
              <h1 className="md:text-6xl text-3xl font-bold text-gray-900 md:mb-16 mb-3">
                Bringing ideas into life
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Every project has a story, and we'd love to hear yours. Share
                your vision, goals, and unique approach. So, let's collaborate
                with us to bring it into reality.
              </p>
            </div>
            <div className="md:w-[400px] w-full md:mt-20 mt-5">
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-white rounded-full p-5 border-[1px] border-[#eaeaea]">
                  <LuMessagesSquare className="text-2xl" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Instant Response as Always!
                </h1>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl">
                No longer wait. Receive your reply within an hour on working
                days. We're as excited as you to begin things rolling
              </p>
            </div>
            <div className="md:w-[400px] w-full mt-5 md:mt-20">
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-white rounded-full p-5 border-[1px] border-[#eaeaea]">
                  <TbLockCheck className="text-2xl" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Your Data & IP are completely Protected
                </h1>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl">
                Your data and intellectual property are safe with us. Do you
                need extra assurance? We're happy to sign an NDA before getting
                into further details.
              </p>
            </div>
          </div>

          <div className="">
            <div className="mt-3 ">
              <h3 className="md:text-4xl text-xl font-bold ">
                Tell Us About Your Project
              </h3>
            </div>
            <form
              className="mt-3"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="businessEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.businessEmail
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  />
                  {errors.businessEmail && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.businessEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.companyName ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                    pattern="[0-9]*"
                    inputMode="numeric"
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="foundUs"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How Did You Find Us <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="foundUs"
                    value={formData.foundUs}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.foundUs ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  >
                    <option value="">Select</option>
                    <option value="search">Search Engine</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.foundUs && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.foundUs}
                    </p>
                  )}
                </div>

                <div className="">
                  <label
                    htmlFor="partnershipType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type of Partnership <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-md border ${
                      errors.partnershipType
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                  >
                    <option value="">Please Select</option>
                    <option value="consulting">Consulting</option>
                    <option value="development">Development</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.partnershipType && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.partnershipType}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <label
                  htmlFor="projectDetails"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Details (Tell us your requirements){" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="projectDetails"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.projectDetails ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500`}
                />
                {errors.projectDetails && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.projectDetails}
                  </p>
                )}
              </div>

              <div className="max-w-4xl mx-auto p-6 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Which solution do you need?{" "}
                    <span className="text-red-500">*</span>
                  </h2>
                  <div className="space-y-4">
                    {solutions.map((solutionGroup) => (
                      <div
                        key={solutionGroup.category}
                        className="flex flex-wrap gap-2"
                      >
                        {solutionGroup.items.map((solution) => (
                          <button
                            type="button"
                            key={solution}
                            onClick={() => handleSolutionClick(solution)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                              ${
                                selectedSolutions.includes(solution)
                                  ? "bg-black text-white"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                          >
                            {solution}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                  {errors.solutions && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.solutions}
                    </p>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Set Your Budget : Starting from
                    </h2>
                    <span className="text-xl font-semibold text-emerald-500">
                      $ {budget}K
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      type="range"
                      min="50"
                      max="500"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>50k</span>
                      <span>500k</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="pt-3">
                    Let's create something extraordinary together and discuss
                    your ideas now!
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Upload your files if needed
                  </h2>
                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrag}
                    className={`border-2 border-dashed rounded-xl p-6 transition-colors
                      ${
                        dragActive
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                  >
                    {files.length === 0 ? (
                      <div className="flex flex-col items-center justify-center text-gray-600 py-4">
                        <LuUpload className="text-3xl mb-2" />
                        <span className="text-lg mb-2">
                          + Drop files here or click to upload
                        </span>
                        <input
                          type="file"
                          multiple
                          className="hidden"
                          id="file-upload"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                        />
                        <button
                          type="button"
                          onClick={handleBrowseClick}
                          className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors font-medium"
                        >
                          Browse Files
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-700">
                            Uploaded Files
                          </span>
                          <button
                            type="button"
                            onClick={() => setFiles([])}
                            className="text-sm text-red-500 hover:text-red-700"
                          >
                            Clear All
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {files.map((file) => (
                            <div
                              key={file.id}
                              className="flex bg-white p-3 rounded-lg border border-gray-200 shadow-sm"
                            >
                              {isImageFile(file.type) ? (
                                <div className="w-16 h-16 flex-shrink-0 mr-3">
                                  <img
                                    src={file.url}
                                    alt={file.name}
                                    className="w-full h-full object-cover rounded"
                                  />
                                </div>
                              ) : (
                                <div className="w-16 h-16 flex-shrink-0 mr-3 bg-gray-100 rounded flex items-center justify-center">
                                  <span className="text-xs text-gray-500 text-center">
                                    {file.type.split("/")[1]?.toUpperCase() ||
                                      "FILE"}
                                  </span>
                                </div>
                              )}

                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {file.name}
                                  </p>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(file.id)}
                                    className="text-gray-400 hover:text-red-500 ml-2"
                                  >
                                    <LuX size={18} />
                                  </button>
                                </div>
                                <p className="text-xs text-gray-500">
                                  {file.size}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto md:p-6 p-2 bg-gray-50">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap md:gap-8 gap-2">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sendNDA}
                          onChange={(e) => setSendNDA(e.target.checked)}
                          className="w-5 h-5 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-gray-700">Send me an NDA</span>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={callASAP}
                          onChange={(e) => setCallASAP(e.target.checked)}
                          className="w-5 h-5 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-gray-700">Call me ASAP</span>
                      </label>
                    </div>

                    <div className="text-sm text-gray-600">
                      <p className="md:mb-4">
                        The controller of your data is Venture IT Solutions. The
                        legal basis of the processing is our legitimate interest
                        in responding to your questions and requests submitted
                        through the form. You have the right to object to the
                        processing, right to access the data, right to rectify
                        or erase the data and also the right to restrict the
                        data processing.
                      </p>
                    </div>
                  </div>

                  <div className="flex md:justify-end justify-center items-center gap-4">
                    {/* reCAPTCHA v2 Checkbox */}
                    <div className="mt-6">
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={(t) => setCaptchaToken(t)}
                        onExpired={() => setCaptchaToken(null)}
                        onError={() => setCaptchaToken(null)}
                        theme="light"
                      />
                    </div>

                    {/* Show the real submit button ONLY after captcha is solved */}
                    {captchaToken ? (
                      <button type="submit">
                        <GradientButton
                          text={loading ? "Submitting..." : "Submit"}
                          textColor="#171717"
                          fontSize="16px"
                          padding="6px 20px"
                        />
                      </button>
                    ) : (
                      // optional: a subtle placeholder so layout doesn't jump
                      <div className="h-10 px-6 rounded-md bg-gray-200 opacity-60 select-none flex items-center">
                        Complete reCAPTCHA to continue
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
