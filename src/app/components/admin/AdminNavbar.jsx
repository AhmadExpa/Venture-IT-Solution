"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function AdminNavbar() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6">
        <div className="flex items-center">
          <Image
            src="/build4.png"
            alt="Logo"
            width={80}
            height={84}
            className="rounded-xl border-2 border-dashed"
          />
          <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-500">
              Welcome back, {session?.user?.name || "Admin"}
            </p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
