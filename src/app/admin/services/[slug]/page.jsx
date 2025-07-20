"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const ServiceEditPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    mainHeading: "",
    description: "",
    buttonText: "",
    sections: [],
  });

  useEffect(() => {
    fetchService();
  }, [slug]);

  const fetchService = async () => {
    const res = await fetch(`/api/services/${slug}`);
    const data = await res.json();
    setService(data);
    setFormData({
      title: data.title,
      slug: data.slug,
      mainHeading: data.mainHeading,
      description: data.description,
      buttonText: data.buttonText,
      sections: [...data.sections],
    });
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...formData.sections];
    updatedSections[index][field] = value;
    setFormData((prev) => ({ ...prev, sections: updatedSections }));
  };

  const addNewSection = () => {
    setFormData((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          id: `section-${Date.now()}`,
          heading: "",
          paragraph: "",
          paragraph2: "",
          paragraph3: "",
          path: "",
        },
      ],
    }));
  };

  const removeSection = (index) => {
    const updatedSections = [...formData.sections];
    updatedSections.splice(index, 1);
    setFormData((prev) => ({ ...prev, sections: updatedSections }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/admin/services/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Service updated!");
      router.push("/admin/services");
    } else {
      alert("Update failed!");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!service) return <p>Service not found</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Edit Service</h1>
        <button
          onClick={() => router.push("/admin/services")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Back to Services
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Slug</label>
            <select
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a slug</option>
              <option value="development">Development</option>
              <option value="devops-automation">DevOps & Automation</option>
              <option value="data-engineering">Data Engineering</option>
              <option value="artificial-intelligence">
                Artificial Intelligence
              </option>
              <option value="security">Security</option>
              <option value="cloude-infrastructure">
                Cloud Infrastructure
              </option>
              <option value="digital-transformation">
                Digital Transformation
              </option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">Main Heading</label>
          <input
            type="text"
            name="mainHeading"
            value={formData.mainHeading}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Button Text</label>
          <input
            type="text"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Sections</h2>
            <button
              type="button"
              onClick={addNewSection}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Section
            </button>
          </div>

          {formData.sections.map((section, index) => (
            <div key={index} className="mb-6 p-4 border rounded-lg bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Section {index + 1}</h3>
                <button
                  type="button"
                  onClick={() => removeSection(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 text-sm">ID</label>
                  <input
                    type="text"
                    value={section.id}
                    onChange={(e) =>
                      handleSectionChange(index, "id", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">Heading</label>
                  <input
                    type="text"
                    value={section.heading}
                    onChange={(e) =>
                      handleSectionChange(index, "heading", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm">Paragraph 1</label>
                  <textarea
                    value={section.paragraph || ""}
                    onChange={(e) =>
                      handleSectionChange(index, "paragraph", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">Paragraph 2</label>
                  <textarea
                    value={section.paragraph2 || ""}
                    onChange={(e) =>
                      handleSectionChange(index, "paragraph2", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">Paragraph 3</label>
                  <textarea
                    value={section.paragraph3 || ""}
                    onChange={(e) =>
                      handleSectionChange(index, "paragraph3", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm">Path</label>
                  <input
                    type="text"
                    value={section.path}
                    onChange={(e) =>
                      handleSectionChange(index, "path", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.push("/admin/services")}
            className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceEditPage;
