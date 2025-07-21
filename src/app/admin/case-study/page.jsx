"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

export default function CaseStudyListPage() {
  const [CaseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await fetch("/api/admin/case-study");
        const data = await res.json();
        setCaseStudies(data);
      } catch (err) {
        setError("Failed to load CaseStudies");
      } finally {
        setLoading(false);
      }
    };
    fetchCaseStudies();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this CaseStudy post?")) {
      try {
        const res = await fetch(`/api/admin/case-study/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Delete failed");
        setCaseStudies((prev) =>
          prev.filter((caseStudy) => caseStudy._id !== id)
        );
      } catch (err) {
        setError("Failed to delete caseStudy");
      }
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
        <h1 className="text-2xl font-bold text-gray-900">
          Manage Case Studies
        </h1>
        <Link
          href="/admin/case-study/new"
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <FiPlus className="mr-2" />
          New CaseStudy
        </Link>
      </div>

      {CaseStudies.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No case studies yet
          </h3>
          <p className="text-gray-500 mb-4">
            Get started by creating your first case study
          </p>
          <Link
            href="/admin/case-study/new"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <FiPlus className="mr-2" />
            Create Case-Study
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {CaseStudies.map((caseStudy) => (
                <tr key={caseStudy._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {caseStudy.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {caseStudy.slug}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Published
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(caseStudy.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/case-study/${caseStudy._id}`}
                      className="text-indigo-600 hover:text-indigo-900 mr-4 inline-flex items-center"
                    >
                      <FiEdit className="mr-1" /> Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(caseStudy._id)}
                      className="text-red-600 hover:text-red-900 inline-flex items-center"
                    >
                      <FiTrash2 className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
