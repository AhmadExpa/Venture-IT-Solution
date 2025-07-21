"use client";
import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { FiSave, FiArrowLeft } from "react-icons/fi";
import { LuUpload, LuX } from "react-icons/lu";

export default function EditCaseStudyPage() {
  const params = useParams();
  const id = params.id;
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    images: [],
  });
  const [newFiles, setNewFiles] = useState([]);
  const [filesToDelete, setFilesToDelete] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchcaseStudy = async () => {
      try {
        const res = await fetch(`/api/admin/case-study/${id}`);
        if (!res.ok) throw new Error("caseStudy not found");
        const caseStudy = await res.json();

        setFormData({
          title: caseStudy.title,
          slug: caseStudy.slug,
          excerpt: caseStudy.excerpt || "",
          content: caseStudy.content,
          images: caseStudy.images || [],
        });
      } catch (err) {
        setError("Failed to load caseStudy");
      } finally {
        setLoading(false);
      }
    };
    fetchcaseStudy();
  }, [id]);

  // File handling functions (same as create page)
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    addFiles(selectedFiles);
  };

  const addFiles = (selectedFiles) => {
    const newFilesArr = selectedFiles.map((file) => ({
      file,
      id: crypto.randomUUID(),
      url: URL.createObjectURL(file),
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
    }));
    setNewFiles((prev) => [...prev, ...newFilesArr]);
  };

  const removeFile = (id, isExisting) => {
    if (isExisting) {
      setFilesToDelete((prev) => [...prev, id]);
      setFormData((prev) => ({
        ...prev,
        images: prev.images.filter((img) => img._id !== id),
      }));
    } else {
      setNewFiles((prev) => {
        const updatedFiles = prev.filter((file) => file.id !== id);
        const fileToRemove = prev.find((file) => file.id === id);
        if (fileToRemove) URL.revokeObjectURL(fileToRemove.url);
        return updatedFiles;
      });
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2) + " " + sizes[i]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleBrowseClick = () => fileInputRef.current.click();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const form = new FormData();
    form.append("title", formData.title);
    form.append("slug", formData.slug);
    form.append("excerpt", formData.excerpt);
    form.append("content", formData.content);
    form.append("imagesToDelete", JSON.stringify(filesToDelete));

    // Append existing images
    formData.images.forEach((img) => {
      form.append("existingImages", JSON.stringify(img));
    });

    // Append new files
    newFiles.forEach(({ file }) => {
      form.append("images", file);
    });

    try {
      const res = await fetch(`/api/admin/case-study/${id}`, {
        method: "PUT",
        body: form,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Update failed");
      }
      router.push("/admin/case-study");
    } catch (err) {
      setError("Failed to update caseStudy: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Edit caseStudy Post
          </h1>
          <p className="text-gray-500">Update your caseStudy content</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => router.push("/admin/case-study")}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FiArrowLeft className="mr-2" />
            Back to Case Study
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white rounded-lg shadow p-6 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            placeholder="A short description of your caseStudy post"
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
            rows="12"
            required
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
            placeholder="Write your caseStudy content in Markdown format..."
          ></textarea>
          <p className="mt-1 text-sm text-gray-500">
            You can use Markdown for formatting
          </p>
        </div>

        {/* File Upload Section */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">
            Upload your files if needed
          </h2>
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-6 transition-colors
              ${
                dragActive
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-700">
                  Uploaded Files
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setNewFiles([]);
                    setFilesToDelete([]);
                  }}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Clear New Files
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Existing Images */}
                {formData.images.map((image) => (
                  <div
                    key={image._id}
                    className="flex bg-white p-3 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="w-16 h-16 flex-shrink-0 mr-3">
                      <img
                        src={image.path}
                        alt={image.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {image.name}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeFile(image._id, true)}
                          className="text-gray-400 hover:text-red-500 ml-2"
                        >
                          <LuX size={18} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">{image.size}</p>
                      <span className="text-xs text-blue-500">Existing</span>
                    </div>
                  </div>
                ))}

                {/* New Files */}
                {newFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex bg-white p-3 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="w-16 h-16 flex-shrink-0 mr-3">
                      <img
                        src={file.url}
                        alt={file.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {file.name}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeFile(file.id, false)}
                          className="text-gray-400 hover:text-red-500 ml-2"
                        >
                          <LuX size={18} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">{file.size}</p>
                      <span className="text-xs text-green-500">New</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center text-gray-600 py-4">
                <LuUpload className="text-3xl mb-2" />
                <span className="text-lg mb-2">
                  + Drop files here or click to upload
                </span>
                <input
                  type="file"
                  multiple
                  className="hidden"
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
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={saving}
            className={`flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none ${
              saving ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <FiSave className="mr-2" />
            {saving ? "Saving Changes..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
