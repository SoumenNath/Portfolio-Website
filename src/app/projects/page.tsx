"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    { name: "Inventory Management System", description: "ASP.NET C# full-stack app", href: "/projects/inventory" },
    { name: "Road Hazard Detection", description: "CV project with OpenCV & YOLOv8", href: "/projects/road-hazard" },
    { name: "Disaster Resource Finder", description: "ASP.NET disaster resource locator", href: "/projects/disaster-resource" },
  ];

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem", display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
      
      {projects.map((project) => (
        <Link key={project.name} href={project.href}>
          <div style={{
            padding: "1.5rem",
            border: "1px solid var(--secondary)",
            borderRadius: "0.5rem",
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
          }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3 style={{ fontWeight: "600", fontSize: "1.25rem", marginBottom: "0.5rem" }}>{project.name}</h3>
            <p style={{ color: "var(--secondary)" }}>{project.description}</p>
          </div>
        </Link>
      ))}
      
    </main>
  );
}
