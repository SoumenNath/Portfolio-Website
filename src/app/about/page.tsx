"use client";

export default function AboutPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      
      <section className="animate-fadeIn">
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--foreground)" }}>About Me</h1>
        <p style={{ color: "var(--secondary)", marginTop: "1rem" }}>
          I am a software developer specializing in full-stack web development and computer vision. I enjoy building interactive, user-friendly applications and solving real-world problems.
        </p>
        <p style={{ color: "var(--secondary)" }}>
          My main focus is creating scalable applications and exploring new technologies. I enjoy both backend and frontend development and building projects that make a real difference.
        </p>
      </section>

      <section className="animate-fadeIn">
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--foreground)" }}>Skills</h2>
        <ul style={{ color: "var(--secondary)", marginTop: "0.5rem", lineHeight: "1.6" }}>
          <li>JavaScript / TypeScript / React / Next.js</li>
          <li>Node.js, Express, MongoDB, SQL</li>
          <li>C#, ASP.NET, MVC</li>
          <li>Tailwind CSS, CSS Variables, PostCSS</li>
          <li>OpenCV, YOLOv8, Computer Vision</li>
        </ul>
      </section>

    </main>
  );
}
