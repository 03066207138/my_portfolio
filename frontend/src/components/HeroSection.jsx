import React, { useState } from "react";
import ProjectsSection from "./ProjectsSection";
import Resume from "./Resume";

export default function HeroSection() {
  const [showProjects, setShowProjects] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <section style={styles.hero}>
        {/* <h1 style={styles.title}>Hi, I'm Saher Pervaiz</h1>
        <p style={styles.subtitle}>
          AI Developer • Full Stack Engineer • Chatbot Specialist
        </p> */}

        <div style={styles.buttons}>
          <button
            onClick={() => {
              setShowProjects(!showProjects);
              setShowResume(false); // hide resume if open
            }}
            style={styles.buttonDark}
          >
            🚀 View Projects
          </button>

          <button
            onClick={() => {
              setShowResume(!showResume);
              setShowProjects(false); // hide projects if open
            }}
            style={styles.buttonLight}
          >
            📄 View Resume
          </button>

          <a href="/resume.pdf" style={styles.buttonLight} download>
            ⬇️ Download Resume
          </a>
        </div>
      </section>

      {/* ✅ Toggle sections below based on state */}
      {showProjects && <ProjectsSection />}
      {showResume && <Resume />}
    </>
  );
}

const styles = {
  hero: {
    marginTop: "20px",
    padding: "20px 10px",
    background: "#0d1b2a",
    color: "#f5f5f5",
    textAlign: "center",
    borderRadius: "100px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "600",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: "300",
    color: "#adb5bd",
    marginBottom: "28px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  buttonDark: {
    background: "#1b263b",
    color: "#ffffff",
    padding: "12px 28px",
    borderRadius: "30px",
    fontWeight: "500",
    textDecoration: "none",
    border: "1px solid #415a77",
    cursor: "pointer",
  },
  buttonLight: {
    background: "#e0e1dd",
    color: "#1b263b",
    padding: "12px 28px",
    borderRadius: "30px",
    fontWeight: "500",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
  },
};
