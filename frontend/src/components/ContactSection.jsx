import React from "react";

export default function ContactSection() {
  return (
    <section style={styles.container}>
      <div style={styles.heroBackground}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Hi, I'm Saher Pervaiz</h1>
          <p style={styles.heroSubtitle}>AI Developer • Full Stack Engineer • Chatbot Specialist</p>
          <a href="mailto:nimra@example.com" style={styles.hireButton}>Hire Me</a>
        </div>
      </div>

      <div style={styles.aboutSection}>
        <div style={styles.aboutLeft}>
          <div style={styles.experienceCard}>
            <img
              src="/images/saher.jpg"
              alt="Saher Pervaiz"
              style={styles.profileImage}
            />
            <div style={styles.experienceBadge}>3+<br />Years<br />Experience</div>
          </div>
        </div>
        <div style={styles.aboutRight}>
          <h2 style={styles.heading}>Introduction About Me</h2>
          <p style={styles.description}>
            I’m passionate about building intelligent applications that solve real-world problems. My expertise lies in creating AI-driven tools, full-stack systems, and personalized solutions that deliver value.
          </p>
          <p style={styles.description}>
            Whether it's a chatbot, medical RAG system, or analytics dashboard — I bring strong coding skills and creative insight to every project.
          </p>
        </div>
      </div>

      {/* <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Message" rows="5" style={styles.textarea} required />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      <p style={styles.email}>📧 Email: <a href="mailto:nimra@example.com">nimra@example.com</a></p> */}
    </section>


  );
}

const styles = {
  container: {
    padding: "0 20px",
    backgroundColor: "#121212",
    color: "#f8f9fa",
    fontFamily: "Segoe UI, sans-serif",
  },
  heroBackground: {
    backgroundImage: "url('/images/saher1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
  },
  heroOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
    padding: "40px 30px",
    borderRadius: "16px",
    textAlign: "center",
    maxWidth: "700px",
    width: "100%",
    color: "#fff",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#ffffff",
    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  },

  profileImage: {
    width: "250px",
    height: "auto",
    borderRadius: "50%",
    objectFit: "cover",
  },

  heroSubtitle: {
    fontSize: "1.1rem",
    fontWeight: "400",
    color: "#e0e0e0",
    marginBottom: "24px",
  },
  hireButton: {
    backgroundColor: "#e91e63",
    color: "#fff",
    padding: "12px 28px",
    borderRadius: "30px",
    fontWeight: "600",
    fontSize: "16px",
    border: "none",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  aboutSection: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "40px",
    gap: "20px",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  aboutLeft: {
    flex: "1 1 200px",
    textAlign: "right",
  },
  aboutright: {
    flex: "1 1 200px",
    textAlign: "center",
  },
  experienceCard: {
    position: "relative",
    display: "inline-block",
  },

  experienceBadge: {
    position: "absolute",
    bottom: "-10px",
    left: "-10px",
    background: "#e91e63",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "10px",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "14px",
  },
  aboutRight: {
    flex: "1 1 400px",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#ffffff",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    color: "#bbbbbb",
    marginBottom: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "500px",
    margin: "80px auto 20px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #444",
    backgroundColor: "#1e1e1e",
    color: "#fff",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #444",
    backgroundColor: "#1e1e1e",
    color: "#fff",
  },
  button: {
    padding: "12px",
    backgroundColor: "#198754",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
  email: {
    textAlign: "center",
    fontSize: "0.95rem",
    color: "#999",
    marginBottom: "40px",
  },
};
