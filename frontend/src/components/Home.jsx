// components/Home.jsx
import React from "react";
import HeroSection from "./HeroSection";
import Resume from "./Resume";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
    return (
        <>
            <ContactSection />
            <HeroSection />
            <TestimonialsSection />
        </>
    );
}
