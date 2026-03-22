import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import data from "../data/data.json";
import FeatureCard from "../components/FeatureCard";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function PortfolioPage() {
  const { slug } = useParams();

  const feature = Object.values(data).find((item) => item.slug === slug);

  if (!feature) {
    return <div className="p-10">Not Found</div>;
  }

  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <FeatureCard
        name={feature.name}
        title={feature.title}
        description={feature.description}
        expertises={feature.expertises}
        services={feature.services}
        images={feature.images}
      />

      <Features />
      <Testimonials />
      <Footer />
    </motion.div>
  );
}

export default PortfolioPage;
