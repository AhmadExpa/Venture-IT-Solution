"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiFileText,
  FiMail,
  FiUsers,
  FiFilePlus,
  FiBriefcase,
  FiPhoneCall,
} from "react-icons/fi";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: <FiHome className="text-lg" />,
    },
    {
      href: "/admin/blogs",
      label: "Blog Posts",
      icon: <FiFileText className="text-lg" />,
    },
    {
      href: "/admin/blogs/new",
      label: "New Blog",
      icon: <FiFilePlus className="text-lg" />,
    },
    {
      href: "/admin/submissions",
      label: "Hire Submissions",
      icon: <FiMail className="text-lg" />,
    },
    {
      href: "/admin/contact-submissions",
      label: "Contact Submissions",
      icon: <FiPhoneCall className="text-lg" />,
    },
    {
      href: "/admin/services",
      label: "Services",
      icon: <FiBriefcase className="text-lg" />,
    },
    {
      href: "/admin/users",
      label: "Users",
      icon: <FiUsers className="text-lg" />,
    },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col min-h-screen">
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
                ? "bg-gray-700 border-l-4 border-indigo-500"
                : "hover:bg-gray-700"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        © {new Date().getFullYear()} Venture IT Solutions
      </div>
    </div>
  );
}
