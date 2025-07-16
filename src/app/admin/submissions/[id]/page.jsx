"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  FiDownload,
  FiCalendar,
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";

export default function SubmissionDetailPage() {
  const { id } = useParams();
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        const res = await fetch(`/api/admin/submissions/${id}`);
        const data = await res.json();
        setSubmission(data);
      } catch (err) {
        setError("Failed to load submission details");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchSubmission();
  }, [id]);

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

  if (!submission) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Submission not found
        </h3>
        <p className="text-gray-500">
          The requested submission could not be found
        </p>
      </div>
    );
  }

  const downloadFile = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop(); // Extracts file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this submission?")) return;

    try {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete submission");

      alert("Submission deleted successfully");
      window.location.href = "/admin/submissions"; // redirect to listing
    } catch (err) {
      alert("Error deleting submission: " + err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Submission Details
          </h1>
          <p className="text-gray-500">
            Received on {new Date(submission.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <FiUser className="text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">
                  {submission.firstName} {submission.lastName}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FiMail className="text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{submission.businessEmail}</p>
              </div>
            </div>

            <div className="flex items-center">
              <FiPhone className="text-gray-400 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{submission.phoneNumber}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Company</p>
                <p className="font-medium">{submission.companyName}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Project Details</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">How they found us</p>
              <p className="font-medium">{submission.foundUs}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Partnership type</p>
              <p className="font-medium">{submission.partnershipType}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Budget</p>
              <p className="font-medium">${submission.budget}K</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Solutions</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {submission.selectedSolutions?.map((solution, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full"
                  >
                    {solution}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Project Requirements</h2>
        <p className="whitespace-pre-line">{submission.projectDetails}</p>
      </div>

      {submission.files?.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Attached Files</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {submission.files.map((file, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex items-center"
              >
                <div className="bg-gray-100 p-3 rounded-lg mr-4">
                  <FiDownload className="text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{file.name}</p>
                  <p className="text-sm text-gray-500">{file.size}</p>
                </div>
                <button
                  onClick={() => downloadFile(file.path)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <FiDownload />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
        <div className="flex space-x-6">
          <div>
            <p className="text-sm text-gray-500">Send NDA</p>
            <p className="font-medium">{submission.sendNDA ? "Yes" : "No"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Call ASAP</p>
            <p className="font-medium">{submission.callASAP ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
        >
          Delete Submission
        </button>
      </div>
    </div>
  );
}
