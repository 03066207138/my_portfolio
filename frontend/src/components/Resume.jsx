import React from "react";

export default function Resume() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📄 My Resume</h2>
      <iframe
        src="/resume.pdf"
        title="Resume PDF"
        width="100%"
        height="700px"
        style={styles.frame}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#0d1b2a",
    textAlign: "center",
  },
  frame: {
    border: "1px solid #dee2e6",
    borderRadius: "8px",
  },
};
