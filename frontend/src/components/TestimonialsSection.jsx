import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Adeel Khan",
      role: "CEO, MedTechAI",
      message:
        "Nimra built us a custom AI medical chatbot that reduced our support load by 70%. Highly recommended!",
    },
    {
      name: "Sara Malik",
      role: "Founder, LearnFusion",
      message:
        "Her ability to design full-stack AI systems and present them professionally in a portfolio is unmatched.",
    },
    {
      name: "Jason Lee",
      role: "CTO, ByteCure",
      message:
        "Nimra is one of the most promising AI developers I’ve worked with. Her work ethic and delivery are exceptional.",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>💬 Testimonials</h2>
      <div style={styles.cardContainer}>
        {testimonials.map((item, idx) => (
          <div key={idx} style={styles.card}>
            <p style={styles.message}>“{item.message}”</p>
            <h4 style={styles.name}>{item.name}</h4>
            <p style={styles.role}>{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    background: "#f8f9fa",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "40px",
    color: "#0d1b2a",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "12px",
    maxWidth: "320px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  message: {
    fontStyle: "italic",
    marginBottom: "16px",
    fontSize: "15px",
    color: "#343a40",
  },
  name: {
    fontWeight: "600",
    fontSize: "16px",
    marginBottom: "4px",
    color: "#198754",
  },
  role: {
    fontSize: "14px",
    color: "#6c757d",
  },
};
