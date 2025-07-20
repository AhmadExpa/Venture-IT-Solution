"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { FaTrash, FaEye } from "react-icons/fa";

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch("/api/admin/contact-submission");
        const data = await res.json();
        console.log("Fetched data:", data);
        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching submissions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this submission?");
    if (!confirm) return;

    try {
      const res = await fetch(`/api/admin/contact-submission/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setSubmissions((prev) => prev.filter((s) => s._id !== id));
        alert("Submission deleted successfully.");
      } else {
        alert("Error deleting submission.");
      }
    } catch (err) {
      alert("Request failed.");
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Form Submissions</h1>

      {loading ? (
        <p>Loading...</p>
      ) : submissions.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-500">No submissions found</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.map((submission) => (
                <tr key={submission._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {submission.firstName} {submission.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {submission.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {format(new Date(submission.submittedAt), "MMM d, yyyy HH:mm")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                    <Link
                      href={`/admin/contact-submissions/${submission._id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FaEye className="inline mr-1" /> View
                    </Link>
                    <button
                      onClick={() => handleDelete(submission._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash className="inline mr-1" /> Delete
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
