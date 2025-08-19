import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import ClientLayout from "../components/ClientLayout";

// Metadata — server-side
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js & Tailwind CSS",
};

// Root layout — server-side
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
