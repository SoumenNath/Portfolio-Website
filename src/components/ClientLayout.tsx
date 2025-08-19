"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-blue-600 font-semibold dark:text-blue-400"
                  : "hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {isDark ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-1 px-8 py-10">{children}</main>

      {/* Footer */}
      <footer className="text-center py-6 bg-white dark:bg-gray-800 border-t mt-16">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </>
  );
}
