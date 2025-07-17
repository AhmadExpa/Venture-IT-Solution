"use client";
import AdminLayout from "../components/admin/AdminLayout";
import { SessionProvider } from "next-auth/react";

// export const metadata = {
//   title: "Admin Dashboard | Venture IT Solutions",
//   description: "Administration panel for Venture IT Solutions",
// };

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <AdminLayout>{children}</AdminLayout>
    </SessionProvider>
  );
}
