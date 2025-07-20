"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, use } from "react";

export default function ContactSubmissionDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [submission, setSubmission] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/admin/contact-submission/${id}`);
        const data = await response.json();
        setSubmission(data);
      } catch (error) {
        console.error("Error fetching submission:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubmission();
  }, [id]);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(
        `/api/admin/contact-submission/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        router.push("/admin/contact-submissions");
      } else {
        console.error("Failed to delete submission");
        setIsDeleting(false);
      }
    } catch (error) {
      console.error("Error deleting submission:", error);
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Submission Not Found</h1>
        <p>The requested submission could not be found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Submission from {submission.firstName} {submission.lastName}
      </h1>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <p>
              <strong>Name:</strong> {submission.firstName}{" "}
              {submission.lastName}
            </p>
            <p>
              <strong>Email:</strong> {submission.email}
            </p>
            <p>
              <strong>Submitted:</strong>{" "}
              {new Date(submission.submittedAt).toLocaleString()}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Message</h2>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <p className="whitespace-pre-line">{submission.message}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete Submission
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">
              Are you sure you want to delete this submission? This action
              cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
