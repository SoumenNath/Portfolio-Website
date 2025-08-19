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
  const [scrollY, setScrollY] = useState(0);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setIsDark(savedTheme === "dark");
  }, []);

  // Apply theme and save to localStorage
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      isDark ? "#0a0a0a" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--foreground",
      isDark ? "#ededed" : "#171717"
    );
    document.documentElement.style.setProperty(
      "--primary",
      isDark ? "#3b82f6" : "#1d4ed8"
    );
    document.documentElement.style.setProperty(
      "--secondary",
      isDark ? "#9ca3af" : "#6b7280"
    );
    document.documentElement.style.setProperty(
      "--accent",
      isDark ? "#60a5fa" : "#2563eb"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "var(--background)",
          borderBottom: "1px solid var(--secondary)",
          zIndex: 50,
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "1.25rem", color: "var(--foreground)" }}>
          My Portfolio
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                style={{
                  fontWeight: pathname === link.href ? 600 : 400,
                  color:
                    pathname === link.href
                      ? "var(--primary)"
                      : "var(--foreground)",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    pathname === link.href ? "var(--primary)" : "var(--foreground)")
                }
              >
                {link.label}
              </span>
            </Link>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              marginLeft: "1rem",
              padding: "0.25rem 0.75rem",
              border: "1px solid var(--foreground)",
              borderRadius: "0.25rem",
              cursor: "pointer",
              transition: "background 0.2s",
              backgroundColor: "transparent",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {isDark ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* Page content with top padding for sticky navbar */}
      <main style={{ flex: 1, paddingTop: "5rem" }}>{children}</main>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "1.5rem 2rem",
          borderTop: "1px solid var(--secondary)",
          marginTop: "4rem",
          backgroundColor: "var(--background)",
          color: "var(--secondary)",
        }}
      >
        <p>© {new Date().getFullYear()} Your Name. Built with Next.js & CSS Variables.</p>
      </footer>

      {/* Scroll-to-Top Button */}
      {scrollY > 200 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            padding: "0.75rem",
            borderRadius: "9999px",
            backgroundColor: "var(--primary)",
            color: "white",
            cursor: "pointer",
            border: "none",
            transition: "transform 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          ↑
        </button>
      )}
    </>
  );
}
