"use client";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuUpload, LuX } from "react-icons/lu";

export default function NewCaseStudyPage() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.url);
      }
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

    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.excerpt) newErrors.excerpt = "First name is required";
    if (!formData.slug) newErrors.slug = "Slug is required";
    if (!formData.content) newErrors.content = "Content is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
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

    const formDataObj = new FormData();
    setLoading(true);

    // Append all fields
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    // Append files
    files.forEach(({ file }) => {
      formDataObj.append("images", file);
    });

    try {
      const res = await fetch("/api/admin/case-study", {
        method: "POST",
        body: formDataObj,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");
      setToast({
        show: true,
        message: "CaseStudy created successfully",
        type: "success",
      });

      // Reset form
      setFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
      });
      setFiles([]);

      router.push("/admin/case-study");
    } catch (err) {
      setError("Failed to create CaseStudy: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Create New CaseStudy
        </h1>
      </div>

      {toast.show && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          } text-white min-w-[300px] flex justify-between items-center`}
        >
          <p className="">{toast.message}</p>
          <button
            onClick={() => setToast({ ...toast, show: false })}
            className="ml-4 text-white hover:text-gray-200"
          >
            <LuX size={18} />
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white rounded-lg shadow p-6 space-y-6"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="slug"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Slug (URL)
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            required
            value={formData.slug}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="excerpt"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Excerpt
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            rows="3"
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="10"
            required
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
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
                            {file.type.split("/")[1]?.toUpperCase() || "FILE"}
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
                        <p className="text-xs text-gray-500">{file.size}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => router.push("/admin/case-study")}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Creating..." : "Create CaseStudy"}
          </button>
        </div>
      </form>
    </div>
  );
}
