import { getContactSubmissions } from "@/lib/contactFormActions";
import { format } from "date-fns";
import Link from "next/link";
import { FaTrash, FaEye } from "react-icons/fa";

export const metadata = {
  title: "Contact Form Submissions",
};

export default async function ContactSubmissionsPage() {
  const submissions = await getContactSubmissions();

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Contact Form Submissions</h1>

        {submissions.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-500">No submissions found</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
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
                      {format(
                        new Date(submission.submittedAt),
                        "MMM d, yyyy HH:mm"
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                      <Link
                        href={`/admin/contact-submissions/${submission._id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <FaEye className="inline mr-1" /> View
                      </Link>
                      <Link
                        href={`/admin/contact-submissions/${submission._id}/delete`}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash className="inline mr-1" /> Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
