"use client";
import Link from "next/link";

export default function HomePage() {
  const projects = [
    { name: "Inventory Management System", description: "ASP.NET C# full-stack app", href: "/projects" },
    { name: "Road Hazard Detection", description: "CV project with OpenCV & YOLOv8", href: "/projects" },
    { name: "Disaster Resource Finder", description: "ASP.NET disaster resource locator", href: "/projects" },
  ];

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem", display: "flex", flexDirection: "column", gap: "4rem" }}>

      {/* Hero Section */}
      <section className="animate-fadeIn" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "var(--foreground)" }}>Hi, I'm Your Name</h1>
        <p style={{ color: "var(--secondary)", fontSize: "1.25rem", margin: "1rem 0" }}>
          I build full-stack web applications and explore computer vision projects.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/projects">
            <button style={{ backgroundColor: "var(--primary)", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", transition: "transform 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              View Projects
            </button>
          </Link>
          <Link href="/contact">
            <button style={{ border: "1px solid var(--foreground)", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", transition: "transform 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              Contact Me
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="animate-fadeIn" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--foreground)" }}>About Me</h2>
        <p style={{ color: "var(--secondary)", marginTop: "1rem" }}>
          I am a software developer specializing in full-stack web development and computer vision. I enjoy building interactive, user-friendly applications and solving real-world problems.
        </p>
        <p style={{ color: "var(--secondary)" }}>
          Skills: JavaScript, TypeScript, React, Next.js, Node.js, C#, ASP.NET, Tailwind CSS, MongoDB, SQL, OpenCV
        </p>
      </section>

      {/* Projects Section */}
      <section className="animate-fadeIn">
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "var(--foreground)", marginBottom: "2rem" }}>Selected Projects</h2>
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {projects.map(project => (
            <Link key={project.name} href={project.href}>
              <div style={{
                padding: "1.5rem",
                border: "1px solid var(--secondary)",
                borderRadius: "0.5rem",
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer"
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <h3 style={{ fontWeight: "600", fontSize: "1.25rem", marginBottom: "0.5rem" }}>{project.name}</h3>
                <p style={{ color: "var(--secondary)" }}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="animate-fadeIn" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--foreground)" }}>Let's Build Something Together</h2>
        <p style={{ color: "var(--secondary)", margin: "1rem 0 2rem" }}>
          Interested in working together on a project or hiring me? Reach out and let's create something amazing.
        </p>
        <Link href="/contact">
          <button style={{ backgroundColor: "var(--primary)", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            Contact Me
          </button>
        </Link>
      </section>

    </main>
  );
}
