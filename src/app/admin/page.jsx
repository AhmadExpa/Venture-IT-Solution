import { getDashboardStats } from "@/lib/adminActions"
import { FiFileText, FiMail, FiUsers, FiBarChart2 } from "react-icons/fi"

export default async function AdminDashboard() {
  const stats = await getDashboardStats()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<FiFileText className="text-2xl" />} 
          title="Blog Posts" 
          value={stats.blogCount} 
          change={stats.blogChange} 
        />
        <StatCard 
          icon={<FiMail className="text-2xl" />} 
          title="Submissions" 
          value={stats.submissionCount} 
          change={stats.submissionChange} 
        />
        <StatCard 
          icon={<FiUsers className="text-2xl" />} 
          title="Users" 
          value={stats.userCount} 
          change={stats.userChange} 
        />
        <StatCard 
          icon={<FiBarChart2 className="text-2xl" />} 
          title="Traffic" 
          value={`${stats.traffic}%`} 
          change={stats.trafficChange} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Submissions</h2>
          <div className="space-y-4">
            {stats.recentSubmissions.map((sub) => (
              <div key={sub._id} className="border-b pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between">
                  <h3 className="font-medium">{sub.companyName}</h3>
                  <span className="text-sm text-gray-500">{new Date(sub.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{sub.projectDetails.substring(0, 70)}...</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Latest Blog Posts</h2>
          <div className="space-y-4">
            {stats.recentBlogs.map((blog) => (
              <div key={blog._id} className="border-b pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between">
                  <h3 className="font-medium">{blog.title}</h3>
                  <span className="text-sm text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{blog.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, title, value, change }) {
  const isPositive = change >= 0
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <div className="flex items-center">
        <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
      <div className={`mt-4 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        <span>{isPositive ? '↑' : '↓'} {Math.abs(change)}% </span>
        <span>from last week</span>
      </div>
    </div>
  )
}