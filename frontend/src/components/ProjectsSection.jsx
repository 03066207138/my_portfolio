// components/ProjectsSection.jsx
import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "🧠 Medical RAG Chatbot",
      description:
        "An AI-powered chatbot using Groq API, FAISS, and PDF-based medical encyclopedia to provide health responses with context.",
      link: "https://github.com/yourusername/medical-rag-chatbot", // Replace with actual link
    },
    {
      title: "🌐 AI Portfolio Website",
      description:
        "Personal portfolio website showcasing AI and full-stack projects. Built with React and styled elegantly with custom CSS.",
      link: "https://your-deployed-site.com", // Replace with actual deployed URL
    },
    {
      title: "🤖 WhatsApp AI Assistant",
      description:
        "A custom AI assistant integrated with Twilio to answer real-time WhatsApp queries related to mental health.",
      link: "#",
    },
  ];

  return (
    <section style={styles.container} id="projects">
      <h2 style={styles.heading}>🚀 My Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, idx) => (
          <div key={idx} style={styles.card}>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.desc}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#0d1b2a",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  },
  card: {
    padding: "24px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "12px",
  },
  desc: {
    fontSize: "0.95rem",
    marginBottom: "16px",
  },
  link: {
    fontWeight: "500",
    color: "#198754",
    textDecoration: "none",
  },
};
