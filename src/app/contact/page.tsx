"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with actual form handling
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem 1rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
      
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--foreground)" }}>Contact Me</h1>
      <p style={{ color: "var(--secondary)" }}>Feel free to reach out for collaborations, projects, or just to say hi!</p>

      {/* Contacts Section */}
      <section className="animate-fadeIn" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "var(--foreground)" }}>My Contacts</h2>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>
            <a href="mailto:youremail@example.com" style={{ color: "var(--primary)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--primary)"}
            >
              📧 Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--primary)"}
            >
              💼 LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--primary)"}
            >
              🐙 GitHub
            </a>
          </li>
        </ul>
      </section>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "0.75rem", borderRadius: "0.25rem", border: "1px solid var(--secondary)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: "0.75rem", borderRadius: "0.25rem", border: "1px solid var(--secondary)", backgroundColor: "var(--background)", color: "var(--foreground)" }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: "0.75rem", borderRadius: "0.25rem", border: "1px solid var(--secondary)", backgroundColor: "var(--background)", color: "var(--foreground)", minHeight: "150px" }}
          required
        />
        <button type="submit" style={{ backgroundColor: "var(--primary)", color: "white", padding: "0.75rem", borderRadius: "0.5rem", cursor: "pointer", transition: "transform 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          Send Message
        </button>
      </form>

    </main>
  );
}
