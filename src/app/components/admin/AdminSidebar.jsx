"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiPieChart,
  FiEdit3,
  FiInbox,
  FiUser,
  FiBookOpen,
  FiSettings,
  FiMessageCircle,
} from "react-icons/fi";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: <FiPieChart className="text-lg" />,
    },
    {
      href: "/admin/blogs",
      label: "Blog Posts",
      icon: <FiEdit3 className="text-lg" />,
    },
    {
      href: "/admin/case-study",
      label: "Case Study",
      icon: <FiBookOpen className="text-lg" />,
    },
    {
      href: "/admin/submissions",
      label: "Hire Submissions",
      icon: <FiInbox className="text-lg" />,
    },
    {
      href: "/admin/contact-submissions",
      label: "Contact Submissions",
      icon: <FiMessageCircle className="text-lg" />,
    },
    {
      href: "/admin/services",
      label: "Services",
      icon: <FiSettings className="text-lg" />,
    },
    {
      href: "/admin/users",
      label: "Users",
      icon: <FiUser className="text-lg" />,
    },
  ];

  return (
    <div
      className="w-64 text-white flex flex-col min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #C1AB5D, #a48f47)",
      }}
    >
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Venture IT Admin</h1>
      </div>
      <nav className="flex-1 mt-5">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-3 ${
              pathname === item.href
                ? "bg-black bg-opacity-20 border-l-4 border-indigo-500"
                : "hover:bg-black hover:bg-opacity-10"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700 text-sm text-gray-200">
        © {new Date().getFullYear()} Venture IT Solutions
      </div>
    </div>
  );
}
